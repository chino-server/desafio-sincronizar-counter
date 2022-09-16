import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ItemMediaCard from './item'
import ItemCount from './ItemListContainer/itemCount'
import {CartContext } from '../contex/useContex'
import { Link } from 'react-router-dom'

const ItemDetail = () => {
	const [add, setAdd]= useState (false)

	const {addItem}= useContext (CartContext)

	
	const [user, setUser] = useState([]);

	let { id } = useParams();

	useEffect(() => {
		axios(`https://fakestoreapi.com/products/${id}`).then((res) =>
			setUser(res.data)
		);
	}, [id]);

	return (
		<div className='CharacterList-detail'>
            {<ItemMediaCard data={user} />}
			 {
				add?
				   <div>Añadido</div>
				   :
				<ItemCount item= {user} addItem={addItem}/>
				
			}
		 <Link to={"/cart"} variant="contained">Finalizar Compra </Link>
        </div>
	);
};

export default ItemDetail









