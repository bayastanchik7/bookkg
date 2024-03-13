import React, { useState } from "react";
import "./index.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import kitepp from "../../images/kitepp.svg";
import { SlBasket } from "react-icons/sl";
import leader from "../../images/leader.svg";
import djon from "../../images/djon.svg";
import delai from "../../images/delai.svg";
import ilik from "../../images/ilik.svg";
import { AiOutlineCheck } from "react-icons/ai";

const Jurok = () => {
  const [state, setState] = useState(Array(5).fill(false));

  const handleBookClick = (index) => {
    const leader = [...state];
    leader[index] = !leader[index];
    setState(leader);
  };

  return (
    <div id="jurok">
      <div className="container">
        <div className="jurok">
          <h1>Возможно, Вам понравится</h1>
          <div className="input">
            <input type="text" placeholder="Сортировка" />{" "}
            <AiOutlineArrowDown className="icons" />
          </div>
        </div>
        <div className="cont">
          {[kitepp, leader, djon, delai, ilik].map((image, index) => (
            <div
              key={index}
              className="fotos"
              onClick={() => handleBookClick(index)}
            >
              <div className="img">
                <img src={image} alt="" />
              </div>
              <div className="icon">
                <h2>2100 сом</h2>
                {state[index] ? (
                  <AiOutlineCheck className="basket" />
                ) : (
                  <SlBasket className="basket" />
                )}
              </div>
              <div className="h2">Джинсы момсы / банан</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jurok;
