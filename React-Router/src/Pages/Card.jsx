import React, { useContext } from 'react'
import { CardContext } from '../Context/CardContext'
import {FaTrash} from "react-icons/fa";
import {Link} from "react-router-dom";

function Card() {
  const { carditems, removeFromeCard, updataQuantity } = useContext(CardContext);
  const totalPrice=carditems.reduce(
    (total,item) => total + item.price * item.quantity,0)
  return (
    <>
      <div className='container mx-auto py-5'>
        <h2 className='text-2xl fount-bold mb-4'>Shopping Cart</h2>

        { carditems.length === 0 ? (
          <h2 className='font-bold'>card is empty</h2>
          ):(

        <div className='grid grid-cols-3 gap-4'>
          <div className='col-span-2 '>
            <table className='w-full text-left'>
              <thead className='border-b'>
                <tr>
                  <th className='py-2'>Products</th>
                  <th className='py-2'>Price</th>
                  <th className='py-2'>Quantity</th>
                  <th className='py-2'>SubTotal</th>
                  <th className='py-2'>Remove</th>
                </tr>
              </thead>
              <tbody>
                { carditems.map((item)=>(
                <tr key={item.id} className='border-b' >
                  <td>
                    <img src={item.image} alt={item.title}className='w-16 h-16 rounded' />
                    <span>{item.title}</span>
                  </td>
                  <td>
                    {item.price}
                  </td>
                  <td>
                    <div className='flex items-center gap-4'>
                      <button onClick={()=> updataQuantity(item.id,item.quantity - 1 )}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={()=> updataQuantity(item.id,item.quantity + 1)}>+</button>
                    </div>

                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)} </td>
                  <td>
                    <button className='text-red-500 ' onClick={() => removeFromeCard(item.id) }>
                      
                      <FaTrash/>
                    </button>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div >
            <h3 className='py-2 font-bold'>card total</h3>
            <p className='py-2 font-bold'>card items:{carditems.length}</p>
            <div>
              <p className='py-2 font-bold'>shopping</p>
              <p className='py-2 font-bold'>shopping to: oman</p>
              <button className='py-2 font-bold'>Change address</button>
            </div>
            <div>
              <h3 className='py-2 font-bold'>total price:</h3>
              <p className='py-2 font-bold'>${totalPrice.toFixed(2)}</p>
            </div>
            <Link to="/Checkout" className='block text-center bg-yellow-400 py-2 rounded fount-semibold mt-4' 
            >Checkout</Link>
          </div>
        </div>
          )}
      </div>

    </>
  );
}

export default Card