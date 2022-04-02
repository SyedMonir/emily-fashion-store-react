import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:productID" element={<ProductDetails />} />
        <Route path="/men" element={<Home />} />
        <Route path="/women" element={<Home />} />
        <Route path="/kid" element={<Home />} />
        <Route path="/accessories" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
