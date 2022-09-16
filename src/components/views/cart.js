import React, {useContext} from 'react'
import { CartContext } from '../../contex/useContex'


 const Cart = () => {
    const {items, addItem} = useContext (CartContext)
    console.log (items)
    
  return (
    <div>
       { items.map ((item)=>{
        return (<div key={item.id}>
            <h3>{item.counter} {item.title}</h3>

        </div>)
            
        })}
    </div>
  )
}

export default Cart


