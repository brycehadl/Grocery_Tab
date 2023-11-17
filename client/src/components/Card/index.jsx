import React, { useEffect, useState } from 'react';
import './style.scss';

const Card = ({ product }) => {

  return (
    <div className="container mt-4">
      <div className="card product-card">
        <div className="card-body">
          <h5 className="card-title">Product Information</h5>

          <div className="form-group">
            <label htmlFor="item">Item:</label>
            <p id="item" className="form-control">{data.item}</p>
          </div>

          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <p id="price" className="form-control">{`$${data.price}`}</p>
          </div>

          <div className="form-group">
            <label htmlFor="expiration-date">Expiration Date:</label>
            <p id="expiration-date" className="form-control">{data.expirationDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
