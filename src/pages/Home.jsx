import React, { useState, useEffect } from 'react';
import axios from '../axios';
import './Home.css';
import BAGC from '.././assets/Bagcr.png';
import MAIN from '.././assets/Main.png';
import FIRST from '.././assets/First.png';
import SECOND from '.././assets/Second.png';
import OT from '.././assets/TrigOne.png'
import THT from '.././assets/TrigThree.png'
import TWT from '.././assets/TrigTwo.png'
import ADAM from '.././assets/Adam.png'
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://656df576bcc5618d3c244f13.mockapi.io/ap/v1/Shop');
        setProducts(response.data.slice(0, 3));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="footer">
        <div className="footer-block">
          <div className="footer-text">
            <h1>Новые поступления <br /> в этом сезоне</h1>
            <h4>Утонченные сочетания и бархатные <br /> оттенки - вот то, что вы искали в этом <br /> сезоне. Время исследовать.</h4>
            <NavLink to='/shop'><button className='button'>Открыть магазин</button></NavLink>
          </div>
          <div className="footer-img">
            <img className='one' src={BAGC} alt="" />
            <img className='two' src={MAIN} alt="" />
            <img className='three' src={FIRST} alt="" />
            <img className='four' src={SECOND} alt="" />
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="card1">
          <h2 className='ash'>Новая коллекция</h2>
          {products.map((product, index) => (
            <div className="product1" key={index}>
              <img className='img3' width='30%' src={product.images}/>
              <h3>{product.name}</h3>
              <p>Цена: {product.price}</p>
            </div>
          ))}
          <NavLink to='/shop'><button className='button'>Открыть магазин</button></NavLink>
        </div>
        <div className="card2">
          <h2 className='ash'>Что для нас важно</h2>
          <div className="card2-info">
            <img className='ot' src={OT} alt="" />
            <img className='twt' src={TWT} alt="" />
            <img className='tht' src={THT} alt="" />
          </div>
        </div>
        <div className="card3">
          <h2 className="ash">Команда мечты Womazing</h2>
          <div className="card3-info">
            <img  src={ADAM} alt="" />
            <div className="card3-text">
            <h4>Для каждой</h4>
            <p className='p1'>Каждая девушка уникальна. <br /> Однако, мы схожи в <br /> миллионе мелочей.</p>
            <p className='p2'>Womazing ищет эти мелочи и <br /> создает прекрасные вещи, <br /> которые выгодно <br /> подчеркивают достоинства <br /> каждой девушки.</p>
            <NavLink to='/about'><p className='p11'>Подробнее о бренде</p></NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
