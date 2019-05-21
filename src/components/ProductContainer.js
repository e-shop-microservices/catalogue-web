import React from 'react';
import Product from "./Product";
import './ProductContainer.css'

const ProductContainer = ({products}) => {
    if (products && products.length > 0) {
        return (
            <div className="product-container">
                {
                    products.map(p => <Product key={p.id}
                                               id={p.id}
                                               name={p.name}
                                               price={p.price}
                                               imagePath="/product.jpg"/>)
                }
            </div>
        )
    } else {
        return (
            <div className="product-container-no-found">
                <h2>No products found</h2>
            </div>
        )
    }
};

export default ProductContainer;
