import  TextField  from '@mui/material/TextField'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useBookContext } from '../../context/BookContext';
import Header from '../../components/Header/Header';
import "./admin.css"



const Admin = () => {
    const {addProduct} = useBookContext()
    const [values,setValues] = useState({
        image:'',
        name:'',
        price:'',
        description:'',
      
    })
    const handleClick = () => {
        addProduct(values);
    }
    console.log(values);
    return(
        <Box>
            <div id="admin">
                <Header/>
                <div className="container">
                    <div className="admin" 
                    style={{
                        display:"flex",
                        alignItems:"center",
                        flexDirection:"column",
                        margin:"150px",
                        gap:"20px",
                    }}
                    >
                        <div class="input__wrapper">
                      <input type="file" name="file" id="input__file" class="input input__file"/>
                    </div>
            
            <TextField  sx={{
                maxWidth:"370px",
                width:'100%'
            }} id="outlined-basic"
             label="Product name" 
             variant="outlined"
             name='image' 
             value={values.image}
             onChange={(e) => setValues({...values,image:e.target.value})}
             />
               <div className="inp"
               style={{
                display:"flex",
                alignItems:"center",
                gap:"30px"
               }}
               >

              

            <TextField sx={{
                maxWidth:"200px",
                width:'100%'
            }} id="outlined-basic" 
            label="Category"
             variant="outlined"
             name='name'
             value={values.name}
             onChange={(e) => setValues({...values,name:e.target.value})}
             />
             

            <TextField  sx={{
                maxWidth:"140px",
                width:'100%'
            }} id="outlined-basic" 
            label="Price"
             variant="outlined"
             name='price' 
             type='number'
             value={values.price}
             onChange={(e) => setValues({...values,price:e.target.value})}
             />
           
           </div>
           <input type="text" placeholder='Product description...' 
           style={{
            width: "360px",
            padding:"70px 0",    
            borderRadius:"7px",
            paddingLeft:"20px ",
            paddingTop:"20px",

             }}
            value={values.description}
             onChange={(e) => setValues({...values,description:e.target.value})}
           />

            <Button
            style={{
                width:"380px"
            }}
             onClick={handleClick}  variant="contained">Create</Button>
            </div>
                </div>
            </div>
        </Box>
        
    )
}
export default Admin