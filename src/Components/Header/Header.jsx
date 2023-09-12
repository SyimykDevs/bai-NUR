// import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Image/nurbai-transformed 1.png";
import { AiOutlineUser } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { AiOutlineHeart } from "react-icons/ai";
import ReactFlagsSelect from "react-flags-select";
import  { useState } from "react";
import { useTranslation } from 'react-i18next';

import ModalUser from '../modalUser/ModalUser'
import "./Header.css";

function Header ()  {
  const [modal, setModal] = useState(false);
    const { t } = useTranslation()
    const { i18n } = useTranslation()
    console.log("i18n: ", i18n);
    console.log(t, 'ttttttttttt');

    const [select, setSelect] = useState("RU");

    const onSelect = code => {
        console.log('change----', code.toLowerCase() );
        i18n.changeLanguage(code.toLowerCase());
        setSelect(code);
    };
    // const onSelect = (code) => setSelect(code);
    // console.log(select)

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-wrapper">
                <Link to="/">
                  <img className="images-logo" src={Logo} alt="" />
                </Link>
            <nav>
              <ul>
                <Link to="/">{t("Главный")}</Link>
                <Link to="/About">{t("О нас")}</Link>
                <Link to="/Contact">{t("Услуги")}</Link>
                <Link to="/Service">{t("Контакт")}</Link>
                <AiOutlineUser 
                onClick={()=> {
                  setModal(true)
                }}
                className="user-icons"
                />
                {modal && (
                  <ModalUser 
                  setModal={setModal}
                  />
                )}
                  <ReactFlagsSelect
                  className="menu-flags"
                  defaultCountry="RU"
                  selected={select}
                  onSelect={onSelect}
                  countries={["RU", "US"]}
                  customLabels={{RU: 'RU', US: 'EN'}}
                  optionsSize={12}
                  selectedSize={12}
                  />
                  <Link to='/Basket'>
                  <SlBasket 
                  className="basket-header"
                  />
                  </Link>
                  
                  <AiOutlineHeart 
                  className="heart-header"
                  />
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
