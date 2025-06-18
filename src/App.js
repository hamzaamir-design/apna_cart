import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import ProductList from './components/ProductList.js';
import React, { useState } from 'react';

function App() {
  const initialProductList = [
    {
      price: 9999,
      name: "Iphone 10S Max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi Note 10S Max",
      quantity: 0,
    }
  ]
  const [productList, setProductList] = useState(initialProductList)

  const incrementQuantity = (index) => {
    let newProductList = [...productList]
    newProductList[index].quantity++
    setProductList(newProductList);
  }

  const decrementQuantity = (index) => {
    const newProductList = [...productList];

    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      setProductList(newProductList);
    }
  };

  return (
    <div>
      <Navbar />
      <main className='container' style={{ marginTop: '80px' }}>
        <ProductList products={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} />
      </main>
      {/* <Footer /> */}
    </div>
  )
}
export default App;
