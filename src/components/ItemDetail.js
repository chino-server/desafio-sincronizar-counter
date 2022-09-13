import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ItemMediaCard from './item'
import ItemCount from './ItemListContainer/itemCount'

const ItemDetail = () => {
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
			 {<ItemCount />}
        </div>
	);
};

export default ItemDetail









