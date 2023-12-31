import React, { useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import Facebook from '../images/Vector.png';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Google from '../images/logos_google-icon.png';


import "./ModalUser.css";

const ModalUser = ({ setModal }) => {

 const [eye, setEye] = useState('')
  return (
    <div>
      <div className="modal__wrapper">
        <div className="single__modal">
          <AiOutlineClose
            className="user-clouse"
            onClick={() => setModal(false)}
          />
          <div className="wrapper-modal">
            <h2 className="logo-modal">Регистрация</h2>

            <div className="input-block">
              <p>
                <input
                  className="input-modal"
                  type="email"
                  placeholder="email"
                />
              </p>
              <p>
                <input
                  className="input-modal"
                  type={eye ? 'text' : 'password'}
                  placeholder="password"
                />
                <span className="form__eye" onClick={()=> setEye(prev => !prev)}>
                  {
                    eye ?   <AiFillEyeInvisible /> : <AiFillEye />
                  }
                  
                </span>
              </p>
            </div>
              <div className="liner-box">
                <p className="liner"></p>
                  <p className="modal-text">Войти через</p>
                  <p className="liner"></p>
                </div>

                <div className="modal-icons">
                    <img className="images-modal" src={Facebook} alt="" />
                    <img className="images-modal" src={Google} alt="" />
                </div>

                <button className="modal-button">Войти</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalUser;
