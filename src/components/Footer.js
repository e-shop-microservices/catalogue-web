import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="info-columns-container">
                    <div className="info-column">
                        <h4 className="info-column-header">Information</h4>
                        <ul className="info-column-item-list">
                            <li><a href="https://google.com">Payment</a></li>
                            <li><a href="https://google.com">Delivery</a></li>
                            <li><a href="https://google.com">Guarantee</a></li>
                            <li><a href="https://google.com">Contacts</a></li>
                            <li><a href="https://google.com">Vacancies</a></li>
                            <li><a href="https://google.com">Our team</a></li>
                            <li><a href="https://google.com">B2B</a></li>
                        </ul>
                    </div>
                    <div className="info-column">
                        <h4 className="info-column-header">Shops</h4>
                        <ul className="info-column-item-list">
                            <li><a href="https://google.com">Lviv Hnatiuk</a></li>
                            <li><a href="https://google.com">Lviv V.Velikogo</a></li>
                            <li><a href="https://google.com">Kiev</a></li>
                            <li><a href="https://google.com">Ivano-Frankivsk</a></li>
                            <li><a href="https://google.com">Ternopil</a></li>
                            <li><a href="https://google.com">Chernivtsi</a></li>
                            <li><a href="https://google.com">Rivne</a></li>
                            <li><a href="https://google.com">Zhytomyr</a></li>
                        </ul>
                    </div>
                    <div className="info-column">
                        <h4 className="info-column-header">Our projects</h4>
                        <ul className="info-column-item-list">
                            <li><a href="https://google.com">Gorgany Race</a></li>
                            <li><a href="https://google.com">Gorgany Bus</a></li>
                            <li><a href="https://google.com">Gorgany Pro</a></li>
                        </ul>
                    </div>
                    <div className="info-column">
                        <h4 className="info-column-header">Goods</h4>
                        <ul className="info-column-item-list">
                            <li><a href="https://google.com">Tenst</a></li>
                            <li><a href="https://google.com">Sleeping bags</a></li>
                            <li><a href="https://google.com">Backpacks</a></li>
                            <li><a href="https://google.com">Boots</a></li>
                            <li><a href="https://google.com">Thermal underwear</a></li>
                            <li><a href="https://google.com">City backpacks</a></li>
                        </ul>
                    </div>
                    <div className="email-feed-column">
                        <h2 className="info-column-header">Stay informed.</h2>
                        <p>Find out about the most interesting news, discounts and promotions</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2005-2019, Gorgany.com or its affiliates</p>
            </div>
        </footer>
    );
};

export default Footer;