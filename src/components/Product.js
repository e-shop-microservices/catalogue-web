import React from 'react';
import './Product.css'

const Product = ({name, price, imagePath}) => {
    return (
        <div class="catalog-item-wrapper">
            <div class="catalog-item">
                <div class="catalog-item-discount-area"/>
                <div class="catalog-item-image-area">
                    <a href="https://google.com">
                        <img src={imagePath} alt={name}/>
                    </a>
                </div>
                <div class="catalog-item-footer">
                    <h4>
                        <a href="https://google.com" class="catalog-item-title-link">{name}</a>
                    </h4>
                    <h4 class="catalog-item-price">{price}</h4>
                </div>
            </div>
        </div>
    );
};

export default Product;