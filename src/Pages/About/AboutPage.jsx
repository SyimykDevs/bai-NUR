import React from 'react'
import './AboutPage.css'

const About = () => {
  return (
   <div>
    <section className='section'>
      <div className="container">
        <div className="contentAll">
          <div className="about-content">
            <h2>О нас </h2>
            </div>
          </div>
      </div>
    </section>
    <section className="section2">
      <div className="container">
        <div className="aboutAll">
          <div className="content">
          <h2 className='content-h2'>BAINUR</h2>
          <p>
           <span id='span-id'>Bai-Nur</span>  - это интернет-магазин спортивной одежды и обуви. Мы продаем только оригинальные вещи, обувь и<br />   аксессуары от     ведущих спортивных брендов - Nike, Adidas, Puma, Reebok, VANS и др. На данный момент мы возим <br/> товары только на заказ. Мы доставляем     вещи из Турции, США, России. <br />
    Мы выкупаем товары с официальных сайтов брендов и их партнеров. Каждого поставщика мы тщательно проверяем. <br />
     На данном сайте товары     собираются с онлайн магазинов в автоматизированном режиме. <br />
    Также мы выкупаем с локальных аутлетов и выставляем их на нашей страничке в <span id='span-id'>Instagram</span>
    <br /> 
          </p>
          </div>
        </div>    
      </div>
    </section>
  </div>
  )
}

export default About