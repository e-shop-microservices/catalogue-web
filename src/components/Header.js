import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faUserCircle} from "@fortawesome/free-solid-svg-icons";
import ProductSearch from './search/ProductSearch'
import {Link} from 'react-router-dom'

import './Header.css'

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header-top">
                    <div className="logo">
                        <Link to="/">
                            <img src="/logo.png" alt="Company logo (Gorgany Rework)"/>
                        </Link>
                    </div>
                    <ProductSearch/>
                    <div className="blank-spot"/>
                    <div className="header-element-wrapper">
                        <div className="user-profile-container">
                            <span className="user-circle-icon">
                                <FontAwesomeIcon icon={faUserCircle}/>
                            </span>
                            <span className="phone-number-text">Personal account</span>
                        </div>
                    </div>
                    <div className="separator"/>
                    <div className="header-element-wrapper">
                        <div className="shopping-basket-container">
                            <Link to="/cart" className="shopping-basket-icon">
                                <FontAwesomeIcon icon={faShoppingBasket}/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="menu-list">
                        <Link to="/products?groupId=1" className="menu-list-item">Clothes</Link>
                        <Link to="/products?groupId=2" className="menu-list-item">Jackets</Link>
                        <Link to="/products?groupId=3" className="menu-list-item">Socks</Link>
                        <Link to="/products?gender=male" className="menu-list-item">For Men</Link>
                        <Link to="/products?gender=female" className="menu-list-item">For Women</Link>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;