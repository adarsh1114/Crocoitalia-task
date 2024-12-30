
import React from 'react';
import FirstSection from './FirstSection';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css"
import CheckoutPage from './Checkout.Page';
import Printpage from './Printpage';
// import ProductGrid from './ProductGrid';



function App() {
  return (
    <BrowserRouter>
    <Routes>
<Route path='/' element={<FirstSection/>}></Route>
<Route path='/checkout' element={<CheckoutPage/>}></Route>
<Route path='/print' element={<Printpage/>}></Route>
    </Routes>
    
    
    </BrowserRouter>
        
  );
}

export default App;
