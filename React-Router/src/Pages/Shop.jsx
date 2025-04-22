import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SearchBar from '../Components/SearchBar'
import ProductCard from '../Components/ProductCard'

function Shop() {
  const [products,setProducts]=useState([])

  const [searchTerm,setSearchTerm]=useState('')

  useEffect(()=>{
    // console.log("Whats in product 1", products);
    axios
     .get("https://fakestoreapi.com/products")
     .then((res)=>setProducts(res.data));
  },[])

  const filterProducts = products.filter((product)=>(
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
    
  ))

  return (
    <div className='container mx-auto p-4'>
      <SearchBar setSearchTerm={setSearchTerm}/>
      <div className='grid grid-cols-4 p-4 gap-4'>
        {filterProducts.length > 0 ? filterProducts.map((product)=>(
          <ProductCard key={product.id} product={product}/>
        )): <h1 className='col-span-4 text-center'>Loading...</h1> 
        }
      </div>
      </div>
  );
}

export default Shop