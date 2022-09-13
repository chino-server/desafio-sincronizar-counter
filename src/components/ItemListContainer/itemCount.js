import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const ItemCount = ({onAdd}) => {
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

        <Button size="small" onClick={handlerUpCounter}>Comprar</Button>
        <p>{counter}</p>
        <Button size="small" onClick={handlerCounterDown}>Descomprar</Button>
        <br />
       
        <Link to={"/cart"} variant="contained" onClick={onAdd}>Finalizar Compra </Link>
       

    </div>
  )
}

export default ItemCount
