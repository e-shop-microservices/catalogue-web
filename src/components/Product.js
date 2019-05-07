import React from 'react';
import './Product.css'

const Product = ({name, price, imagePath}) => {
    return (
        <div className="catalog-item-wrapper">
            <div className="catalog-item">
                <div className="catalog-item-discount-area"/>
                <div className="catalog-item-image-area">
                    <a href="https://google.com">
                        <img src={imagePath} alt={name}/>
                    </a>
                </div>
                <div className="catalog-item-footer">
                    <h4>
                        <a href="https://google.com" className="catalog-item-title-link">{name}</a>
                    </h4>
                    <h4 className="catalog-item-price">{price}</h4>
                </div>
            </div>
        </div>
    );
};

export default Product;