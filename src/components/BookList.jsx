import React, { useEffect } from 'react'
import BookCard from './Card/BookCard';
import { useBookContext } from '../context/BookContext';
import Box from '@mui/material/Box';

const BookList = () => {
    const {getProduct,product} = useBookContext()
    useEffect(() => {
        getProduct()
    },[])
    
    return <Box>
        <div className="container">
            <div className={"bookcard"}>
              {
            product.length > 0 ? (product.map((el,idx) => <BookCard el={el} key={idx}/>)) : (<h1></h1>)
        }
        </div>
        </div>
        
          
        
               
    </Box>
}
export default BookList
