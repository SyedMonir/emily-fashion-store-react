import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';
import Spinner from '../Spinner/Spinner';

const Products = () => {
  const [products, loading] = useProducts();

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className="container row mx-auto justify-content-center">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </section>
      )}
    </>
  );
};

export default Products;
