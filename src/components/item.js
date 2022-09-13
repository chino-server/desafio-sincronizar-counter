import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemListContainer/itemCount';


const ItemMediaCard = ({data} ,{data2})=> {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
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