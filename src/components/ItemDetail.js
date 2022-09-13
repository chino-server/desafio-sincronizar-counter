import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ItemMediaCard from './item'
import ItemCount from './ItemListContainer/itemCount'

const ItemDetail = () => {
	const [add, setAdd]= useState (false)
	const onAdd = () =>{
		setAdd (!add)

	}
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
				<ItemCount stock ={10} onAdd={onAdd}/>
				
			}
        </div>
	);
};

export default ItemDetail









