import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
  const { productID } = useParams();
  const [productDetails, setProductDetails] = useState({});
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productID}`)
      .then((res) => res.json())
      .then((json) => setProductDetails(json));
  }, [productID]);
  console.log(productDetails);
  return (
    <Container>
      <section id="product-details">
        <section className="row">
          <figure className="col-md-6 ">
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
          </div>
        </section>
      </section>
    </Container>
  );
};

export default ProductDetails;
