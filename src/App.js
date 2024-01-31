
import './App.css';
import Basket from './basket/basket';
import Home from './home/Home';
import { Route, Routes } from 'react-router-dom';
import { useState } from "react";
import { products } from './product/product';
import Product from './product/product';

function App() {
  const [item, setItem] = useState([])

  const addToBasket = (product) => {
    setItem([...item,product])
  }

  const deleteFromBasket = (product) => {
    const newArr = item.filter(item => item.id !== product.id)
    setItem(newArr)
  }

  return (
   <>
   <div className='wrapper'>
    <Home/>
    <Routes>
       <Route path="/" element = {<Product products={products} addToBasket={addToBasket} item={item} deleteFromBasket={deleteFromBasket}/>}/>
       <Route path="/basket" element = {<Basket item={item} deleteFromBasket={deleteFromBasket} products={products} addToBasket={addToBasket} />}/>
     </Routes>

   </div>
   </>
  );
}

export default App;
