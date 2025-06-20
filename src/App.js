import React, { useState } from 'react';
import Navbar from './components/Navbar.js';
import ProductList from './components/ProductList.js';
import Footer from "./components/Footer.js";
import AddItem from './components/AddItem.js';

const initialProductList = [
  {
    price: 9999,
    name: "iPhone 10S Max",
    quantity: 0,
  },
  {
    price: 7999,
    name: "Redmi Note 10S Max",
    quantity: 0,
  }
];

function App() {
  const [productList, setProductList] = useState(initialProductList);
  const [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    const newProductList = [...productList];
    newProductList[index].quantity++;
    setTotalAmount(totalAmount + newProductList[index].price);
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    const newProductList = [...productList];
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      setTotalAmount(totalAmount - newProductList[index].price);
    }
    setProductList(newProductList);
  };

  const resetQuantity = () => {
    const newProductList = productList.map(product => ({
      ...product,
      quantity: 0
    }));
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    const newProductList = [...productList];
    const removedItem = newProductList[index];
    setTotalAmount(totalAmount - removedItem.quantity * removedItem.price);
    newProductList.splice(index, 1);
    setProductList(newProductList);
  };

  const addItem = (name, price) => {
    const newProductList = [...productList, {
      name,
      price: parseInt(price),
      quantity: 0
    }];
    setProductList(newProductList);
  };

  return (
    <div>
      <Navbar />
      <main className='container' style={{ marginTop: '80px' }}>
        <h2 className="mb-4">🛒 Your Shopping Cart</h2>
        <AddItem addItem={addItem} />
        <div className="mb-3">
          <strong>Total Products:</strong> {productList.length}
        </div>
        <ProductList
          products={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </div>
  );
}

export default App;
