import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <section className="container row mx-auto">
      {products.map((product) => (
        <Product product={product} />
      ))}
    </section>
  );
};

export default Products;
