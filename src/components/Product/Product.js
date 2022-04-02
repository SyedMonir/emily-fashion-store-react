import React from 'react';
import './Product.css';

const Product = ({ product }) => {
  const { title, price, description, category, image } = product;
  return (
    <div className="product col-md-4">
      <img src={image} alt={title} />
      <div className="product-body">
        <h2 title={title}>
          {title.length > 21 ? title.slice(0, 21) + '..' : title}
        </h2>
        <h4>
          <small>Price:</small> $<span>{price}</span>
        </h4>
        <p>
          {description.length > 50 ? description.slice(0, 50) : description}
          <span className="read-more"> ..read more</span>
        </p>
        <h5>{category}</h5>
      </div>
    </div>
  );
};

export default Product;
