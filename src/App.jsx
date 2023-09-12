
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import AboutPage from './Pages/About/AboutPage';
import ContactPage from './Pages/Contact/ContactPage';
import Home from './Pages/Home/HomePage';
import Service from './Pages/Service/ServicePage';
import './translate/i18n';
import BasketPage from './Pages/Basket/BasketPage';


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='About' element={<AboutPage/>}/>
        <Route path='Contact' element={<ContactPage />} />
        <Route path='Service' element={<Service />} />
        <Route path='Basket' element={<BasketPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;
