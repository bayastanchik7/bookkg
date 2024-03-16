import React, { useState } from "react";
import "./index.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
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
      </div>
    </div>
  );
};

export default Jurok;
