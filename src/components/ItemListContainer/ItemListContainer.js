import React, {useState, useEffect} from 'react'
import axios from 'axios';
import '../ItemListContainer/ItemListContainer.css'
import { Link } from 'react-router-dom';

//components

import ItemMediaCard from '../item'

const ItemListContainer = () => {
    const [products, setProducts]= useState ([])

    useEffect (()=>{
        axios ('https://fakestoreapi.com/products')
        .then (res=>setProducts(res.data))
    }, [])

  return (
    <div className='CharacterList-container '>
     {products.map ((product)=>{
        return (
            <div key={product.id}>
              <Link to={`/detail/${product.id}`}> 
                <ItemMediaCard data={product}/>
              </Link>


            </div>
        )
     })}
    </div>
  )
}

export default ItemListContainer
