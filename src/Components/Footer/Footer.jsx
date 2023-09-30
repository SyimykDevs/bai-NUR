import React from 'react' 
import logoFooter from './image/nurbai-transformed 1.png'
import Instagram from './image/Vector.png'
import WhatsApp from './image/Vector (1).png'
import Telegram from './image/basil_telegram-outline.png'
import Gmail from './image/Vector (2).png'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container">
          <div className="footer-content">
            <div className="logo-footer">
              <Link to='/'>
              <img  style={{width:'200', height:'200'}} src={logoFooter} alt="" />
              </Link>
              <p>Спортивная одежда НА ЗАКАЗ <br />
                  По городу Бишкек и всему <br /> 
                  Кыргызстану. Только оригинальные<br />
                  товары. </p>
            </div>
            <div className="text-footer">
              <div className="footer-end">
              <h2>КАТЕГОРИЯ</h2>
              </div>
              <div className="smooth-text">
                <Link to='/ManPage'>для Мужчин</Link>
                <Link to='/WomenPage'>для Женщин</Link>
                <Link to='/KidsPage'>для Детей</Link>
              </div>

            </div>
            
              <div className="footer-icon">
              <h2>МЫ В СОЦ. СЕТЯХ</h2>
                <div className="footer-network">
                  <img src={Instagram} alt="" />
                 <a href="https://api.whatsapp.com/send?phone=996702038656"> <img src={WhatsApp} alt="" /></a>
                  <img src={Telegram} alt="" />
                  <img src={Gmail} alt="" />
                </div>
              </div>
           
             
          </div>

        </div>
    </footer>
  )
}

export default Footer