import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Nav from './components/navbar/nav';
import Home from "./components/home-page/home";
import Card from './components/our-strength/card';
import Vigor from './components/vigor-sec/vigor';
import Vivid from './components/vivid-sec/vivid';
import Market from './components/markets/market';
import Cap from './components/capability/cap';
import About from './components/about-us/about';
import Product from './components/product-page/product';
import Contact from './components/contact/contact';
import Cont from './components/contact-page/cont';
function App() {
  return (
    <>

<Nav/>

<Router>
        <Routes>
          <Route
            path="/"
            element={
          <>
                <Home />
                <Card />
                <Vigor />
                <Vivid />
                <Contact />
              </>
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/cap" element={<Cap/>} />
          <Route path="/market" element={<Market/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/cont" element={<Cont/>} />




        </Routes>
      </Router>











    </>
  );
}

export default App;
