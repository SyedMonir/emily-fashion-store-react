import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { CartContext } from '../../App';
import './ShoppingCart.css';
import { CgClose } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
  const [cart] = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <>
      <Container className="text-center">
        {cart.length === 0 ? (
          <h3 className="text-center mt-5">No item added!</h3>
        ) : (
          ''
        )}
        {cart.map((product) => (
          <section
            id="cart-product"
            key={product.id}
            className="shadow p-3 my-4 bg-body rounded d-flex align-items-center justify-content-between"
          >
            <section className="d-flex">
              <img
                src={product.image}
                alt={product.title}
                className="img-fluid"
              />
              <section className="text-start">
                <h5>{product.title}</h5>
                <p>Quantity:</p>
                <p>
                  <small>{product.category}</small>{' '}
                </p>
              </section>
            </section>
            <section className="d-flex align-items-center">
              <p>
                <small>Price: </small> <strong> ${product.price}</strong>{' '}
              </p>
              <button className="remove-button">
                <CgClose />
              </button>
            </section>
          </section>
        ))}
        <button
          onClick={() => navigate(`/checkout`)}
          style={{ backgroundColor: '#f74c70' }}
          className="mt-5 py-2 px-3 text-uppercase border-0 text-white"
        >
          Check-out
        </button>
      </Container>
    </>
  );
};

export default ShoppingCart;
