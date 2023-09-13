
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import AboutPage from './Pages/About/AboutPage';
import ContactPage from './Pages/Contact/ContactPage';
import Home from './Pages/Home/HomePage';
import Service from './Pages/Servic/ServicePage';
import './translate/i18n';
import BasketPage from './Pages/Basket/BasketPage';
import { useEffect, useState } from 'react';
// import Heart from './Pages/Heart/heart'


function App() {
  const [product, setProduct] = useState([])
  console.log(product);

  useEffect(() => {
    axios.get('http://localhost:3001/product').then(res => {
      return setProduct(res.data)
    })
  },[])

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Home  product={product}/>} />
        <Route path='About' element={<AboutPage/>}/>
        <Route path='Contact' element={<ContactPage />} />
        <Route path='Service' element={<Service />} />
        <Route path='Basket' element={<BasketPage/>}/>
        {/* <Route path='Delivery' element={<Delivery />} /> */}
        {/* <Route path='Heart' element={<Heart/>}/> */}
        </Route>
      </Routes>
    </>
  )
}

export default App;
