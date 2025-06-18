import React from 'react'
import Product from './Product1.js'

export default function ProductList(props) {
    return (
        <>
            {props.products.map((product, i) => (
                <Product key={i} product={product} incrementQuantity={props.incrementQuantity} index={i}
                    decrementQuantity={props.decrementQuantity} />
            ))}
        </>
    )
}
