import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./BookCard.css"


const BookCard = ({el}) => {
    return (
      <div id='card'>
           <div className="container">
            <div className="card">
               <Card sx={{ maxWidth: 240, }}>
    <CardMedia 
      sx={{ height: 300 }}
      image = {el.image}
      title="green iguana"
    />
    
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {el.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {el.price}$
        
      </Typography>
      <Typography>
        {el.description}
      </Typography>
    </CardContent>
  </Card>      
            </div>
        </div>    
      </div>
 

    )
}
export default BookCard