import axios from 'axios';
import React, { createContext, useContext, useState } from 'react'

const bookContext = createContext();
export const useBookContext = () => useContext(bookContext);



const BookContext = ({children}) => {
    const API = "http://localhost:3000/book";
    const [product,setProduct] = useState([])
    const [oneProduct,setOneproduct] = useState({})

    
    const addProduct = async (newProduct) => {
        await axios.post(API,newProduct)
    }
    const getProduct = async () => {    
        const response = await axios(API)
        const {data} =  response
        setProduct(data)
    }
console.log(product);


const removeProduct = async (id) => {
    await axios.delete(`${API}/${id}`)
    getProduct()
}
    
    const getOneProduct = async (id) => {
        const {data} = await axios(`${API}/${id}`)
        setOneproduct(data)
    }
    const values = {
        addProduct,
        getProduct,
        removeProduct,
        product,
        getOneProduct,
        oneProduct,
    };
    return <bookContext.Provider value={values}>{children}</bookContext.Provider>
    
};
export default BookContext
