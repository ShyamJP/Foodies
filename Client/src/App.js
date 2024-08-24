import './App.css';
import {Routes ,Route } from 'react-router-dom';
import FrontPage from "./Components/FrontPage/Front.jsx"
import Cart from "./Components/Cart/Cart"
import Product from "./Components/Product/Product"
import Home from "./Components/Home/Home"
import Contact from "./Components/Contact/Contact"
import Login from './Components/Login/Login';
import Register from './Components/Register/Register'
import Orders from './Components/Orders/Orders.jsx';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const {pathname} = useLocation();
  useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])
  return (
    <>
      <Routes>
        <Route path='/' Component={FrontPage}></Route>
        <Route path='/login' Component={Login}></Route>
        <Route path='/register' Component={Register}></Route>
        <Route path='/home' Component={Home}></Route>
        <Route path='/product' Component={Product}></Route>
        <Route path='/cart' Component={Cart}></Route>
        <Route path='/contact' Component={Contact}></Route>
        {/* <Route path='/About' Component={About}></Route> */}
        <Route path='/Order' Component={Orders}></Route>
      </Routes>
    </>
  );
}

export default App;
