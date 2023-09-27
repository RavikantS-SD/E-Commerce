import React from "react";
import Home from "./Pages/Home";
//import About from './Pages/About';
import Navigation from "./Components/Navigation";
import ShowProducts from "./Pages/ShowProducts";
import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartContext } from "./ContextCart";
import { useState , useEffect } from "react";
import { stringify } from "postcss";

const App = () => {
const [ cart , setCart ] = useState({});

useEffect(() => {
  const cart = window.localStorage.getItem('cart');
  setCart(JSON.parse(cart));
}, [])

useEffect(() => {
  window.localStorage.setItem('cart', JSON.stringify(cart));
}, [cart])


  return (
    <>
      <Router>
        <CartContext.Provider value={{ cart, setCart }}>
          <Navigation />
          <Routes>
            <Route path="/" Component={Home}></Route>
            {/* <Route path='/about' Component={About}></Route> */}
            <Route path="/products" exact Component={ShowProducts}></Route>
            <Route path="/products/:id" Component={SingleProduct}></Route>
            <Route path="/cart" Component={Cart}></Route>
          </Routes>
        </CartContext.Provider>
      </Router>
    </>
  );
}

export default App;
