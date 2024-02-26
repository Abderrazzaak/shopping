

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import  Layout  from '../components/layout/Layout';
import  Home  from './home/Home';
import  Contact  from './contact/Contact';
import  About  from './about/About';
import Footer from "../components/footer/Footer";
import Product from "./product/Product.jsx";
function IndexPages() {
  return (
<BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>

          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/Footer" element={<Footer/>} />
          <Route path="/product" element={<Product/>} />
        </Route>

      </Routes>
    </BrowserRouter>  )
}

export default IndexPages