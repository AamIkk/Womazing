import React from 'react'

const Cart = ({cartData}) => {
  const total = cartData.reduce(
    (total, el) => total + parseFloat(el.price.replace(/\$/g, '')), 0
  );  
  return (
    <div>
      <div>
      <h1 className='h11'>Корзина</h1> 
      <h4 className='h12'>Главная — <p id='p' style={{color: 'rgba(144, 144, 144, 1)'}}>Корзина</p></h4> 
      </div>
        {cartData.map((el)=>(
        <div>
          <h2>{el.name}</h2>
          <img width='20%' src={el.images} alt="" />
          <p>{el.price}</p>
        </div>
        ))}
        <div>
          <input type="text" placeholder='Введите купон'/>
          <button className='btn btn-outline-success'>Применить купон</button>
          <button id='btnn' className='btn btn-outline-success'>Оформить заказ</button>
        </div>
        <h2 className='h11'>Total:{total}$</h2>
    </div>
  )
}

export default Cart