import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CardContext } from '../Context/CardContext';
import axios from 'axios';

function ProuctDetails() {
  const {id}=useParams();
  const [product,setProduct]=useState(null);
  const {addToCard,isInCard,removeFromCard}=useContext(CardContext);
  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((res)=>setProduct(res.data));
  },[id])
  if(!product)return <h1>Loading...</h1>
  const added = isInCard(product.id);
  const handleCard = () =>{
    if(added){
      removeFromCard(product.id);
  }else{
    addToCard({...product,quantity:1});
  }
}
  return (
    <div>
      <div><img src={product.image}/></div>
      <div><h2>{product.title}</h2></div>
      <div><h2>{product.price}</h2></div>
      <button onClick={handleCard}>{added ? "Remove from Card" : "Add to Card"}</button>
      
    </div>
  )
}

export default ProuctDetails