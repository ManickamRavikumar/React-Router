import {React, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { CardContext } from '../Context/CardContext';


function ProductCard({product}) {
    const {addToCard} = useContext(CardContext);
    const {removeFromeCard} = useContext(CardContext);
    const {isInCard} = useContext(CardContext);

    const navigate = useNavigate();
    const added = isInCard(product.id);
    const handleClick =(e) =>{
        e.stopPropagation();
        added? removeFromeCard(product.id):addToCard(product);
        
    }
    const handleNavigate = () =>{ 
        navigate(`/Product/${product.id}`);
    }
  return (
    <div onClick={handleNavigate} className='shadow-lg p-4 rounded-md bg-yellow-100' >
        <img src={product.image} className='h-84 w-full object-cover rounded' alt="" />
        <h2 className='mt-2 font-semibold'>{product.title}</h2>
        <h2 className=''>{product.price}</h2>
        <button onClick={handleClick}className={`px-4 py-1 rounded-full text-white ${added ? 'bg-red-500':'bg-blue-500'}`}>
            {added ? 'Remove from Card':'Add to Card'}
        </button>
    </div>
  )
}

export default ProductCard