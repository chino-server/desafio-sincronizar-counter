import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import ItemCount from './ItemListContainer/itemCount'
import {CartContext } from '../contex/useContex'

import { NavLink } from 'react-router-dom'

const ItemDetail = () => {
	
	const {addItem}= useContext (CartContext)

	
	const [product, setProduct] = useState([]);

	let { id } = useParams();

	useEffect(() => {
		axios(`https://fakestoreapi.com/products/${id}`).then((res) =>
			setProduct(res.data)
		);
	}, [id]);

	const ShowDetails = () => {
        return (
            <>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-12">
                        <NavLink className="text-decoration-none text-dark" to={`/`}>
                            <div className="d-flex align-items-center m-3">
                                <i className="pi pi-arrow-left"></i>
                                <span className="ml-1">&nbsp;Volver al Home</span>
                            </div>
                        </NavLink>
                                                  
                        <div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="images p-3">
                                        <div className="text-center p-4">
                                            <img id="main-image" alt="product" src={product.image} width="250" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="border p-4">
                                        <div className="mt-4 mb-3">

                                        <span className="text-muted text-capitalize"> in {product.category}</span>

                                            <h5 className="text-uppercase">
                                                {product.title}
                                            </h5>

                                            Rating {product.rating && product.rating.rate}
                                            <i className="fa fa-star text-warning"></i>

                                            <div className="price d-flex flex-row align-items-center">
                                                <big className="display-6"><b>${product.price}</b></big>
                                            </div>
                                        </div>
                                        <p className="text-muted">{product.description}</p>
                                        <div className="cart mt-4 align-items-center"> 
											<ItemCount item= {product} addItem={addItem}/>
										</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
                            
	return (
		<div className='CharacterList-detail'>
			 <ShowDetails></ShowDetails>
			 <NavLink className="text-decoration-none text-dark" to={'/cart'}>
			 <div class="d-grid gap-2 col-4 mx-auto">
				<button class="btn btn-primary" type="button">Finalizar Compra</button>
			</div>
		 	</NavLink>
	
        </div>
	);
};

export default ItemDetail









