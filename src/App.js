import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout/Checkout';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const handleAddToCart = (product) => {
    const newShoppingCart = [...cart, product];
    setCart(newShoppingCart);
  };
  return (
    <CartContext.Provider value={[cart, setCart, handleAddToCart]}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:productID" element={<ProductDetails />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/men" element={<Home />} />
        <Route path="/women" element={<Home />} />
        <Route path="/kid" element={<Home />} />
        <Route path="/accessories" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
