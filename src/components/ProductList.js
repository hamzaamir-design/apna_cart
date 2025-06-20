import React from 'react';
import Product from './Product1.js';

export default function ProductList(props) {
  return (
    <>
      {props.products.length > 0 ? (
        props.products.map((product, i) => (
          <Product
            key={i}
            product={product}
            incrementQuantity={props.incrementQuantity}
            decrementQuantity={props.decrementQuantity}
            removeItem={props.removeItem}
            index={i}
          />
        ))
      ) : (
        <h4 className="text-muted text-center my-5">No products in the cart. Add something!</h4>
      )}
    </>
  );
}
