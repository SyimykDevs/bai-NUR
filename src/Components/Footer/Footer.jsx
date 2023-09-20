import React from 'react' 
import logoFooter from './image/nurbai-transformed 1.png'
import Instagram from './image/Vector.png'
import WhatsApp from './image/Vector (1).png'
import Telegram from './image/basil_telegram-outline.png'
import Gmail from './image/Vector (2).png'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container">
          <div className="footer-content">
            <div className="logo-footer">
              <img  style={{width:'200', height:'200'}} src={logoFooter} alt="" />
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
                <p>для Мужчин</p>
                <p>для Женщин</p>
                <p>для Детей</p>
              </div>

            </div>
            
              <div className="footer-icon">
              <h2>МЫ В СОЦ. СЕТЯХ</h2>
                <div className="footer-network">
                  <img src={Instagram} alt="" />
                  <img src={WhatsApp} alt="" />
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