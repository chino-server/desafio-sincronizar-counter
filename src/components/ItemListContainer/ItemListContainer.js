import React, {useState, useEffect} from 'react'
import '../ItemListContainer/ItemListContainer.css'

import { NavLink } from 'react-router-dom';


//components



const ItemListContainer = () => {
    const [products, setProducts]= useState ([])

    const [filter, setFilter] = useState([]);

    useEffect(() => {
        let componentMounted = true;
        const getProducts = async () => {
         
            const response = await fetch('https://fakestoreapi.com/products');
            if (componentMounted) {
                const data = await response.json();
                console.log (data)
                setProducts(data);
                setFilter(data);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);
    const filterProduct = (category) => {
      const updateList = products.filter((x) => x.category === category);
      setFilter(updateList);
  }

  const ShowProducts = () => {
      return (
          <>
              <div className="col-md-3 my-3">

                  <div className="position-sticky" style={{ top: "100px" }}>
      
                      <button className="btn btn-outline-primary m-1 btn-sm" onClick={() => setFilter(products)}>Ver todos</button>
                      <button className="btn btn-outline-primary m-1 btn-sm" onClick={() => filterProduct("women's clothing")}>Ropa Mujer</button>
                      <button className="btn btn-outline-primary m-1 btn-sm" onClick={() => filterProduct("men's clothing")}>Ropa Varón</button>
                      <button className="btn btn-outline-primary m-1 btn-sm" onClick={() => filterProduct("jewelery")}>Joyas</button>
                      <button className="btn btn-outline-primary m-1 btn-sm" onClick={() => filterProduct("electronics")}>Electrónica</button>
                  </div>

              </div>

              <div className="col-md-9 py-md-3">
                  <div className="row">
                      {filter.map((product) => {
                          return (
                              <div className="col-6 col-md-6 col-lg-4 mb-3" key={product.id}>

                                  <div className="card h-100">
                                      <img src={product.image} className="m-3" style={{ height: "300px", width: "auto", objectFit: "contain" }} alt={product.title} />
                                      <div className="m-3 mb-0">
                                          <small className="card-title">{product.title.substring(0, 50)}...</small>
                                      </div>
                                      <div style={{ marginTop: "auto" }}>
                                          <div className="d-flex justify-content-between align-items-center">
                                              <div className="m-3"><b>${product.price}</b></div>
                                            
                                              <NavLink className="stretched-link" to={`/detail/${product.id}`}>
                                                    <button className="btn btn-sm m-3 border-primary">
                                                        <i className="pi pi-arrow-right"></i>
                                                    </button>
                                              </NavLink>
          
                                              
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          )
                      })}
                  </div>

              </div>


          </>
      )
  }





  return (
    <div className="container">
           
                <div className="row"> 
                    <ShowProducts></ShowProducts>
                </div>

    </div>
     
    
  )
}

export default ItemListContainer
