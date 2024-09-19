
// import './App.css';

import { useState } from "react";
import Appbar from "./Dress-site/Appbar";
import { Routes, Route } from 'react-router-dom'
import { Home } from "./Dress-site/Home";
import Shirt from "./Products/Shirt";
import Pant from "./Products/Pant";
import Shoe from "./Products/Shoe";
import MTshirt from "./Products/Tshirt";
import { Shopcart } from "./Shopcat/Shopcart";
import Footter from "./TFooter/Footter";
import Watches from "./watch/Watches";
import Perf from "./perfume/Perfumes";
import Coolers from "./cooler/Coolers";
import Belt from "./belt/Belt";
import Hoodies from "./hoodie/Hoodies";







function App() {
  const [cart, setCart] = useState([]);
  return (
    <div >
      <Appbar cart={cart} />
      <Routes>
        <Route>
          <Route path="/" element={<Home cart={cart} setCart={setCart} />}>
            <Route
              path="Shirt" element={<Shirt cart={cart} setCart={setCart} />} />
            <Route path="Pant" element={<Pant cart={cart} setCart={setCart} />} />
            <Route path="Shoe" element={<Shoe cart={cart} setCart={setCart} />} />
            <Route path="Tshirt" element={<MTshirt cart={cart} setCart={setCart} />} />
            <Route path="Watches" element={<Watches cart={cart} setCart={setCart}/>}/>
            <Route path="Perfumes" element={<Perf cart={cart} setCart={setCart}/>}/>
            <Route path="Coolers" element={<Coolers cart={cart} setCart={setCart}/>}/>
            <Route path="Hoodies" element={<Hoodies cart={cart} setCart={setCart}/>}/>
            <Route path="Belt" element={<Belt cart={cart} setCart={setCart}/>}/>
          </Route>
         
          <Route path="/Shopcart" element={<Shopcart cart={cart} setCart={setCart} />} />

          
        </Route>
      </Routes>
      <Footter/>

    </div>
  );
}

export default App;
