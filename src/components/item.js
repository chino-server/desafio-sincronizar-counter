import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemListContainer/itemCount';


const ItemMediaCard = ({data})=> {

  return (
    <Card sx={{ maxWidth: 500, marginTop:"20px"}}>
      <CardMedia
        component="img"
        height="340"
        image={data.image}
        alt="green iguana"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ {data.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ 
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
  );
}

export default ItemMediaCard