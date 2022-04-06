import { useEffect, useState } from 'react';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        data.sort(() => 0.5 - Math.random());
        setProducts(data);
        setLoading(false);
      });
  }, []);
  return [products, loading];
};

export default useProducts;
