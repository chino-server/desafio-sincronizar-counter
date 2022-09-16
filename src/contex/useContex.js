import React, { createContext, useState } from 'react'


export const CartContext = createContext ([])

export const CartProvider = ({children}) => {
  const [items, setItems] = useState ([])

  const isInCart = (id)=>{
    const found = items.find (item =>item.id===id)
    return found
  }


  const addItem = (item, counter)=>{
    isInCart(item.id)
    ?
    setItems ()
    :
    setItems ([...items, {...item, counter:counter}])
    console.log (items)
  }
  return (
    <CartContext.Provider value={{items, addItem}}> 
        {children}
    </CartContext.Provider>
  )
}
