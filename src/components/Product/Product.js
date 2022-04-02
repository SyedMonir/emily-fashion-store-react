import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';
import { FaCartArrowDown } from 'react-icons/fa';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { CartContext } from '../../App';

const Product = ({ product }) => {
  const { id, title, price, description, category, image } = product;
  const [cartIcon, setCartIcon] = useState(false);
  const navigate = useNavigate();
  const [cart, setCart, handleAddToCart] = useContext(CartContext);

  return (
    <div className="product col-md-4">
      <img onClick={() => navigate(`/product/${id}`)} src={image} alt={title} />
      <div className="product-body">
        <h2 title={title}>
          {title.length > 21 ? title.slice(0, 21) + '..' : title}
        </h2>
        <h4>
          <small>Price:</small> $<span>{price}</span>
        </h4>
        <p>
          {description.length > 45 ? description.slice(0, 45) : description}
          <span
            onClick={() => navigate(`/product/${id}`)}
            className="read-more"
          >
            {' '}
            ..read more
          </span>
        </p>
        <div className="d-flex justify-content-between">
          <h5>{category}</h5>
          <button
            className="addToCart"
            onClick={() => {
              setCartIcon(!cartIcon);
              handleAddToCart(product);
            }}
          >
            {cartIcon ? <BsFillCartCheckFill /> : <FaCartArrowDown />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
