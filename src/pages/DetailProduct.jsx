import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../axios';

const DetailProduct = (props) => {
  const [detail, setDetail] = useState(null);
  const params = useParams();

  const detailProduct = async (id) => {
      const { data } = await axios.get(`/${id}`);
      setDetail(data)
  };

  useEffect(() => {
    detailProduct(params.id);
  }, [params.id]);

  if (detail === null) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className='ura'>
      <img width='30%' src={detail.images} alt="" />
      <h3>{detail.name}</h3>
      <h4>{detail.price}</h4>
      <button onClick={()=>props.onAdd(detail)} className='btn btn-outline-success'>Add to card</button>
    </div>
  );
};

export default DetailProduct;

