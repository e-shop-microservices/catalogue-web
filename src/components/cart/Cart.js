import React, {Component} from 'react';
import CartItem from "./CartItem";

import './Cart.css'
import CartHeader from "./CartHeader";

class Cart extends Component {
    render() {
        return (
            <div className="cart-container">
                <CartHeader/>
                <CartItem/>
            </div>
        );
    }
}

export default Cart;