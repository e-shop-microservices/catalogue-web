import React, {Component} from 'react';
import Product from "./Product";
import './ProductContainer.css'

class ProductContainer extends Component {
    render() {
        return (
            <div className="product-container">
                <Product name="Штани Trimm Jurry" price="1234 грн." imagePath="/product.jpg"/>
                <Product name="Штани Trimm Jurry" price="1234 грн." imagePath="/product.jpg"/>
            </div>
        );
    }
}

export default ProductContainer;