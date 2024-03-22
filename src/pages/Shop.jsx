import React from 'react';
import Card from '../components/card/Card';
import './Shop.css'

const Shop = (props) => {
  const [categoryData, setCategoryData] = React.useState(props.products);
  const newCategories = [...new Set(props.products.map(el => el.kategory))];

  const filterTitle = (title) => {
    const filterProducts = props.products.filter(el => el.kategory === title);
    setCategoryData(filterProducts);
  };

  return (
    <div>
      <h1 className='h11'>Магазин</h1> 
      <h4>Главная — <p id='p' style={{color: 'rgba(144, 144, 144, 1)'}}>Магазин</p></h4> 
      <div className="categories">
        {newCategories.map((el, index) => (
          <button className='btn btn-outline-success' key={index} onClick={() => filterTitle(el)}>{el}</button>
        ))}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {categoryData.map((el, index) => (
          <Card key={index} {...el} />
        ))}
      </div>
    </div>
  );
};

export default Shop;