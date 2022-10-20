import React from 'react'




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
       <div className="price d-flex flex-row align-items-center">
          <button className="btn btn-outline-secondary text-uppercase mr-2 px-4"onClick={handlerUpCounter} style={{margin:"10px"}} >Comprar</button>
            <p>{counter}</p>
            <button className="btn btn-outline-secondary text-uppercase mr-2 px-4"onClick={handlerCounterDown} style={{margin:"10px"}}>Quitar</button>  
        
          
          <button className="btn btn-outline-success text-uppercase mr-2 px-4" onClick = {()=> addItem (item, counter)}>Añadir al carrito</button>
          <br />
       </div>

      
       
    </div>  
  )
}

export default ItemCount
