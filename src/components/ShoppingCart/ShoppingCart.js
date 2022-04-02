import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { CartContext } from '../../App';
import './ShoppingCart.css';
import { CgClose } from 'react-icons/cg';

const ShoppingCart = () => {
  const [cart] = useContext(CartContext);
  return (
    <>
      {cart.map((product) => (
        <Container
          id="cart-product"
          className="shadow p-3 my-4 bg-body rounded d-flex align-items-center justify-content-between"
        >
          <section className="d-flex">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid"
            />
            <section>
              <h4>{product.title}</h4>
              <p>Quantity:</p>
              <p>
                <small>{product.category}</small>{' '}
              </p>
            </section>
          </section>
          <section className="d-flex">
            <p>
              <small>Price: </small> <strong> ${product.price}</strong>{' '}
            </p>
            <button className="remove-button">
              <CgClose />
            </button>
          </section>
        </Container>
      ))}
    </>
  );
};

export default ShoppingCart;
