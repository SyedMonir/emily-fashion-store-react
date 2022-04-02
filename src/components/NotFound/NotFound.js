import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <section id="not-found" className="px-4 mx-auto ">
      <div className="container row mx-auto align-items-center">
        <div className="col-md-6">
          <p className="text-uppercase mb-2">
            <small>Error 404</small>
          </p>
          <h1 className="mb-4">
            Oops! The page you're looking for isn't here.
          </h1>
          <p className="mb-4 text-base">
            You might have the wrong address, or the page may have moved.
          </p>
          <Link to="/" className=" mb-2 py-2 px-3 mt-3">
            Back to homepage
          </Link>
          <Link to="/contact" className=" mb-2 py-2 px-3 mt-3 mx-2">
            Contact us
          </Link>
        </div>
        <figure className="col-md-6">
          <img
            src="https://thumbs.dreamstime.com/b/%C3%B0%C2%BF%C3%B0%C2%B5%C3%B1%E2%80%A1%C3%B0%C2%B0%C3%B1%E2%80%9A%C3%B1%C5%93-134036857.jpg"
            alt=""
            className="img-fluid"
          />
        </figure>
      </div>
    </section>
  );
};

export default NotFound;
