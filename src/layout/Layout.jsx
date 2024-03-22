import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Contacts from '../pages/Contacts'
import Home from '../pages/Home'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Shop from '../pages/Shop'
import axios from '../axios'
import Card from '../components/card/Card'
import DetailProduct from '../pages/DetailProduct'
import Cart from '../pages/Cart'

const Layout = () => {
    const [products, setProducts] = useState(null);
    const [cartData, setCartData]=useState([])

    const getProducts = async () => {
        try {
            const { data } = await axios.get('https://656df576bcc5618d3c244f13.mockapi.io/ap/v1/Shop');
            console.log(data);
            setProducts(data);
        } catch (err) {
            console.log(err);
            throw err;
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    if (products === null) {
        return <h1>Loading...</h1>
    }

    const addToCart=(item)=>{
        setCartData([...cartData, item]);
    }

    return (
        <div>
            <Header cartData={cartData} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shop' element={<Shop products={products} />} />
                <Route path='/about' element={<About />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/detail/:id' element={<DetailProduct onAdd={addToCart} />} />
                <Route path='/cart' element={<Cart cartData={cartData} />} />
            </Routes>
            <Footer/>
        </div>
    )
};


export default Layout
