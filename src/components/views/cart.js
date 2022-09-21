import React, {useContext} from 'react'
import { CartContext } from '../../contex/useContex'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import './DataTableDemo.css';




 const Cart = () => {
    const {items, addItem} = useContext (CartContext)
    console.log (items)
    const footer = (
      <span>
          <Button label="Save" icon="pi pi-check" />
          <Button label="Cancel" icon="pi pi-times" className="p-button-secondary ml-2" />
      </span>
  );

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
const ratingBodyTemplate = (rowData) => {
  return <Rating value={rowData.rating} readOnly cancel={false} />;
}
const footer2 = `In total there are ${items ? items.length : 0} products.`;
 

  return (
    <div className="datatable-templating-demo">
      <div className="card">
        <DataTable value={items} header={header2}  footer={footer2}  responsiveLayout="scroll">
                    <Column field="title" header="Nombre"></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate}></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="counter" header="Cantidad" ></Column>
        </DataTable>
      </div>
               
    </div>
  )
}

export default Cart


