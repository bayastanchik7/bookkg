import React from "react";
import Header from "./Header/Header";
import Hero from "./Hero";
import Categori from "./Categori";
import Jurok from "./Jurok";
import MainRoutes from "../route/MainRoutes";
import { useState } from "react";
import Footer from "./footer";



function AllComponents() {
    const [count,setCount] = useState(false)
    const [value,setValue] = useState('')
    return (
      <div style={{background:count ? "cadetblue" : "white", transition:count ? "0.7s" :"0.9s" ,cursor:'pointer'} }  className="AllComponents">
        <Header setValue={setValue} count={count} setCount={setCount}/>
        <Hero />            
        <Categori />
        <Jurok />
        <MainRoutes />
        <Footer/>
      </div>
    );
  }
  
  export default AllComponents;