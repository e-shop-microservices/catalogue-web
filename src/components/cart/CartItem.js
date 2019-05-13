import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

import './CartItem.css'

class CartItem extends Component {
    render() {
        return (
            <div className="cart-item-wrapper">
                <div className="cart-item-container">
                    <div className="cart-item-image">
                        <a href="https://google.com">
                            <img src="/product.jpg" alt="product"/>
                        </a>
                    </div>
                    <div className="cart-item-info">
                        <a href="https://google.com">Сандалі Source Classic Men</a>
                    </div>
                    <div className="cart-item-price">
                        <span>1999 USD</span>
                    </div>
                    <div className="cart-item-quantity">
                        <select name="quantity">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="cart-item-total">
                        <span>1400 USD</span>
                    </div>
                    <button className="cart-item-close-button">
                        <FontAwesomeIcon icon={faTimes} className="cart-item-close-icon"/>
                    </button>
                </div>
            </div>
        );
    }
}

export default CartItem;