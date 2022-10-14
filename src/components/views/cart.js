import React, {useContext, useState} from 'react'
import { CartContext } from '../../contex/useContex'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Rating } from 'primereact/rating';
import Button from '@mui/material/Button';

import './DataTableDemo.css';




 const Cart = () => {
    const {items, addItem} = useContext (CartContext)
  

    
    console.log (items)
    

  const header = (item) => {
    console.log (item)
    return (
        <React.Fragment>
            <img alt="flag" src={item.image}  />
        </React.Fragment>
    );
}

const header2 = (
  <div className="table-header">
      Productos
      <Button icon="pi pi-refresh" />
  </div>
);
const imageBodyTemplate = (rowData) => {
  return <img src={rowData.image} />;
}
const formatCurrency = (value) => {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}
const priceBodyTemplate = (rowData) => {
  return formatCurrency(rowData.price);
}
const priceSubtotal= (rowData) => {
  return rowData.counter * rowData.price 
}
const ratingBodyTemplate = (rowData) => {
  return <Rating value={rowData.rating} readOnly cancel={false} />;

}


const footer2 = `Un total de  ${items ? items.length : 0} productos nuevos.`;
 

  return (
    <div className="datatable-templating-demo">
      <div className="card">
        <DataTable value={items} header={header2}  footer={footer2}  responsiveLayout="scroll">
                    <Column field="title" header="Producto"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="price" header="Price c/u" body={priceBodyTemplate}></Column>
                    <Column field="counter" header="Cantidad" ></Column>
                    <Column field="price" header="Subtotal" body={priceSubtotal}></Column>
        </DataTable>
        <div>
            {items.length ==0 ? <Button variant="outlined" style={{marginTop:"50px"}}>Ir a la tienda</Button> 
            :  <Button variant="outlined" style={{marginTop:"50px"}}>Pagar</Button>}
        </div>

        


      </div>
               
    </div>
  )
}

export default Cart


