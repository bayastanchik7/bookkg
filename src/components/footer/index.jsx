import React from "react";
import "./index.css";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer-h1">
            <h1>BOOKShop</h1>
          </div>
          <div className="footer-p">
            <p>Способ оплаты</p>
            <p>Условия доставки</p>
            <p>Правила покупки</p>
          </div>
          <div className="footer-o">
            <h4>FAQ</h4>
            <h4>О нас</h4>
          </div>
          <div className="footer-svaz">
            <h4>Связаться с нами:</h4>
            <h4>+996 222 533 735</h4>
            <h4>+996 222 533 735</h4>
            <h4>+996 222 533 735</h4>
            <div className="icon">
              <FaInstagram />
              <FaTelegramPlane />
              <FaWhatsapp />
              <FaFacebook />
            </div>
          </div>
          <div className="foooter">
            <h3>Адрес</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Varius in dolor viverra feugiat <br /> neque, sed in. Mattis
              volutpat malesuada <br /> velit parturient aliquam, est. Mauris
              vitae velit <br /> laoreet faucibus nec amet velit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
