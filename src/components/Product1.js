import React from 'react';

export default function Product1(props) {
  const { product, index, incrementQuantity, decrementQuantity, removeItem } = props;

  return (
    <div className="card p-3 mb-3 shadow-sm">
      <div className="row align-items-center">
        <div className="col-md-5">
          <h4>{product.name} <span className="badge bg-secondary">₹{product.price}</span></h4>
        </div>
        <div className="col-md-3">
          <div className="btn-group" role="group">
            <button className="btn btn-danger" onClick={() => decrementQuantity(index)}>-</button>
            <button className="btn btn-warning">{product.quantity}</button>
            <button className="btn btn-success" onClick={() => incrementQuantity(index)}>+</button>
          </div>
        </div>
        <div className="col-md-2">
          ₹{product.quantity * product.price}
        </div>
        <div className="col-md-2 text-end">
          <button className="btn btn-outline-danger" onClick={() => removeItem(index)}>Remove</button>
        </div>
      </div>
    </div>
  );
}
