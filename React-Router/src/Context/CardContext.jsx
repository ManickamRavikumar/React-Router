import { createContext, useState } from "react";

export const CardContext = createContext()

export const CardProvider = ({children}) => {
  const[carditems, setCarditems] = useState([])
  const addToCard = (product)=>{
    const exist = carditems.find((item)=> item.id === product.id)
    if(exist){
      setCarditems(carditems.map((item)=>item.id === product.id ? {...item, quantity: item.quantity +1}:item))
    }else{
      setCarditems([...carditems,{...product,quantity:1}])
    }
    alert(`Added ${product.name} to the card successfully!`);
  }
  const removeFromeCard = (id) =>{
    setCarditems(carditems.filter((item)=>item.id !== id));
    alert(`Removed the item from the card successfully!`);
  }
  const updataQuantity = (id, quantity) =>{
    setCarditems(carditems.map((item)=>item.id === id ? {...item,quantity: quantity<1 ? 1: quantity}:item));
  }
  const isInCard = (id) => carditems.some((item)=>item.id === id);
  return(
    <CardContext.Provider value={{carditems, addToCard, removeFromeCard, updataQuantity, isInCard}}>
      {children}
    </CardContext.Provider>
  )
}