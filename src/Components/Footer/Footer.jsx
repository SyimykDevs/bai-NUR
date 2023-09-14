import React from 'react' 
import logoFooter from './image/nurbai-transformed 1.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container">
          <div className="footer-content">
            <div className="logo-footer">
              <img  style={{width:'100', height:'100'}} src={logoFooter} alt="" />
            </div>
           
              <div className="category">
                <h3 className='master-category'>КАТЕГОРИЯ</h3>
              </div>
              <div className="network-text">
                <h3 className='network'>МЫ В СОЦ. СЕТЯХ</h3>
              </div>
          </div>
          <div className="social-media">
              <div className="footer-textContent">
              <h4 className='text-footer'>Спортивная одежда НА ЗАКАЗ <br />По городу Бишкек и всему Кыргызстану. <br />Только оригинальные товары.</h4>
            </div>
            <div>

            <h4 className='text-category'>для Мужчин</h4>
                <h4 className='text-category-2'>для Женщин</h4>
                <h4 className='text-category-3'>для Детей</h4>
            <div className='Network-icon'>
            </div>
            </div>
          </div>

        </div>
    </footer>
  )
}

export default Footer