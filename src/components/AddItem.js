import React, { useState } from 'react';

export default function AddItem({ addItem }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || isNaN(price)) {
      alert('Please enter a valid name and numeric price.');
      return;
    }
    addItem(name, price);
    setName('');
    setPrice('');
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <h4 className="mb-3">Add New Product</h4>
      <div className="row g-3">
        <div className="col-md-5">
          <input
            type="text"
            className="form-control"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input
            type="number"
            className="form-control"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <button type="submit" className="btn btn-success w-100">
            Add Product
          </button>
        </div>
      </div>
    </form>
  );
}
