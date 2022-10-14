import React from 'react'
import { Button } from '@mui/material'
import Stack from '@mui/material/Stack';



const ItemCount = ({addItem, item}) => {
    const [counter, setCounter]= React.useState (0)
    const handlerUpCounter = ()=>{
    let stock = 5
    if (counter < stock){
      setCounter (counter +1)
    }
   
  }

  const handlerCounterDown = ()=>{
    if (counter > 0){
      setCounter (counter -1)
    }
   
  }

  return (
    <div>
       
        <Button variant='outlined' size="small" onClick={handlerUpCounter}>Comprar</Button>
        <p>{counter}</p>
        <Button variant='outlined' size="small" onClick={handlerCounterDown}>Quitar</Button>
        <br></br>
        <br></br>
        <Button variant='contained' desabledElevation size="medium" onClick = {()=> addItem (item, counter)}>Añadir al carrito</Button>
        <br />
       
       

    </div>
  )
}

export default ItemCount
