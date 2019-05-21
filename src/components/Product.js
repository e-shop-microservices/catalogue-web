import React from 'react';
import './Product.css'

const Product = ({name, price, imagePath}) => {
    return (
        <div className="catalog-item">
            <div className="catalog-item-discount-area"/>
            <div className="catalog-item-image-area">
                <a href="https://google.com">
                    <img src={imagePath} alt={name}/>
                </a>
            </div>
            <div className="catalog-item-footer">
                <a href="https://google.com" className="catalog-item-title-link">{name}</a>
                <span className="catalog-item-price">{price} USD</span>
            </div>
        </div>
    );
};

export default Product;