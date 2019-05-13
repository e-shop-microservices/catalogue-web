import React from 'react';

import './CartHeader.css'

const CartHeader = () => {
    return (
        <div className="cart-header-container">
            <span className="cart-header-image">Picture</span>
            <span className="cart-header-info">Product</span>
            <span className="cart-header-price">Price</span>
            <span className="cart-header-quantity">Amount</span>
            <span className="cart-header-total">Total</span>
        </div>
    );
};

export default CartHeader;