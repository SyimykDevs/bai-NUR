
import { useState } from 'react';

import './BasketPage.css'
import Restangle from './image/Rectangle 9.png'


const BasketPage = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="basket-content">
            <div className="basket-icon">
              <h2>Корзина</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="basketContentAll">
        <div className="container">
            <div className="basket-section">
                <div className="boxes">
                    <div className="box-text">
                  <div className="box1">
                        <img src={Restangle} alt="" />
                        <div className="box-content">
                       <h4 className='basketContentH4' >Детская Футболка</h4>
                        <p className='basketContent'>Nike Sportswear Club+ Button-Down <br />
                            Short-Sleeve Gömlek</p>
                            <h6 className='text-h6'>Цена: 71$</h6>
                            <div className='counter-container'>
         <button className='btn-counter' onClick={() => setCounter(counter - 1)}>-</button>
         <p className='counter-text'>{counter}</p>
         <button className='btn-counter' onClick={() => setCounter(counter + 1)}>+</button>
        
      </div>
      <button className='btn-basket'>Оформить заказ</button>
                            </div>
                      </div>
                    <h3>Всего: 142$</h3>
                  </div>
                   <div className="box2">
                    <img src={Restangle} alt="" />
                    <div className="box-content">
                       <h4 className='basketContentH4'>Детская Футболка</h4>
                        <p className='basketContent'>Nike Sportswear Club+ Button-Down <br />
                            Short-Sleeve Gömlek</p>
                            <h6 className='text-h6'>Цена: 71$</h6>
                            <div className='counter-container'>
         <button className='btn-counter' onClick={() => setCounter(counter - 1)}>-</button>
         <p className='counter-text'>{counter}</p>
         <button className='btn-counter' onClick={() => setCounter(counter + 1)}>+</button>
         
      </div>

      <a href="https://api.whatsapp.com/send?phone=996702038656">
      <button onClick={() => {
                    setDelivery(true);
                  }}className='btn-basket'>Оформить заказ</button>
        </a>  
                     </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default BasketPage;
