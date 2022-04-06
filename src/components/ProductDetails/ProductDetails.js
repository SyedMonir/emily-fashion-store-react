import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Navigate, useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import './ProductDetails.css';

const ProductDetails = () => {
  const { productID } = useParams();
  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${productID}`)
      .then((res) => res.json())
      .then((data) => {
        setProductDetails(data);
        setLoading(false);
      });
  }, [productID]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Container>
          <section id="product-details">
            <section className="row align-items-center">
              <figure className="col-md-6 text-center">
                <img
                  className="img-fluid"
                  src={productDetails?.image}
                  alt={productDetails?.title}
                />
              </figure>
              <div className="col-md-6">
                <div className="product-body">
                  <h2 title={productDetails?.title}>{productDetails?.title}</h2>
                  <h4>
                    <small>Price:</small> $<span>{productDetails?.price}</span>
                  </h4>
                  <p>{productDetails?.description}</p>
                  <h5>{productDetails?.category}</h5>
                </div>
                <button
                  onClick={() => Navigate(`/checkout`)}
                  style={{ backgroundColor: '#f74c70' }}
                  className="my-2 py-2 px-3 rounded text-uppercase border-0 text-white"
                >
                  BUY NOW
                </button>
              </div>
            </section>
          </section>
        </Container>
      )}
    </>
  );
};

export default ProductDetails;
