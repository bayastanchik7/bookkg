import React from "react";
import "./index.css";
import detectiv from "../../images/detectiv.jpg";
import fantastik from "../../images/fantastik.jpeg";
import pri from "../../images/pri.jpg";
import na from "../../images/na.jpg";

const Categori = () => {
  return (
    <div id="categori">
      <div className="container">
        <h1>Категории</h1>
        <div className="leader">
          <h2>Детектив</h2>
          <h3>Фантастика</h3>
          <h5>Приключения</h5>
          <h4>Научная </h4>
        </div>
        <div className="categori">
          <img src={detectiv} alt="" />
          <img src={fantastik} alt="" />
          <img src={pri} alt="" />
          <img src={na} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Categori;
