import React from 'react';

export default function Footer(props) {
  return (
    <div className="row fixed-bottom bg-light shadow-sm py-2">
      <div className="col-2">
        <button className="btn btn-danger w-100" onClick={props.resetQuantity}>Reset</button>
      </div>
      <div className="col-8 text-center pt-2 fw-bold">
        Total Amount: ₹{props.totalAmount}
      </div>
      <div className="col-2">
        <button className="btn btn-primary w-100">Pay Now</button>
      </div>
    </div>
  );
}
