import React from 'react';

import Cart from "../components/cart/Cart";
import './CartPage.css'

const CartPage = () => {
    return (
        <div className="cart-container">
            <h1 className="cart-title">Shopping Cart</h1>
            <Cart/>
        </div>
    );
};

export default CartPage;