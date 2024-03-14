import React from 'react'
import { RiAdminLine } from 'react-icons/ri'
import { Route, Routes } from 'react-router-dom'
import BookList from '../components/BookList'




const MainRoutes=() => {

    const PUBLIC = [
        {path: '/' , element: <BookList/> , key:1},

    ]
    const PRIVATE = [
        {path: '/admin' , element: <RiAdminLine/> , key:3}
    ]

    return(
        <Routes>
        {
            PUBLIC.map((el) => (  
                <Route path={el.path} element={el.element} key={el.key} />
            ))
        }
        {
            PRIVATE.map((el) => (  
                <Route path={el.path} element={el.element} key={el.key} />
            ))
        }
    </Routes>
    )
}
export default MainRoutes