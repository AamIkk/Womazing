import React, { useState } from 'react'; 
 
const Contacts = () => { 
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [phone, setPhone] = useState(''); 
 
  const handleClick = () => { 
    if (!name || !email || !phone) { 
      alert('Пожалуйста, заполните все обязательные поля!'); 
    } else { 
      alert('Сообщение успешно отправлено'); 
    } 
  }; 
  
  return ( 
    <div className='contacts'> 
      <h1>Контакты</h1> 
      <h4>Главная — <p id='p' style={{color: 'rgba(144, 144, 144, 1)'}}>Контакты</p></h4> 
 
      <div className="o-contakte"> 
        <h5 style={{ textAlign: 'center' }}>Карта с любой точкой</h5> 
      </div> 
 
      <div className="phon-email"> 
        <h5>Телефон <h6>+7 (495) 823-54-12</h6></h5> 
        <h5>E-mail <h6>info@sitename.com</h6></h5> 
        <h5>Адрес <h6>г. Москва, 3-я улица Строителей, 25</h6></h5> 
      </div> 
 
      <div className="emails" > 
        <h3>Напишите нам</h3> 
     <form > 
     <input type="name" placeholder='Имя' value={name} onChange={(e) => setName(e.target.value)} required /> 
        <input type="email" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} required /> 
        <input type="phone" placeholder='Телефон' value={phone} onChange={(e) => setPhone(e.target.value)} required /> 
        <input type="text" placeholder='Сообщение'/> 
        <input type="button" onClick={handleClick} value="Отправить" /> 
     </form> 
      </div> 
    </div> 
  ); 
} 
 
export default Contacts;  