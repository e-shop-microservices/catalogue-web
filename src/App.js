import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Footer from './components/Footer'
import Header from './components/Header';

import ProductSearchPage from './pages/ProductSearchPage';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage'

import './App.css'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className="page-container-wrapper" id="page-container-wrapper">
                    <div className="page-container">
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/products" component={ProductSearchPage}/>
                        <Route exact path="/products/:id" component={ProductPage}/>
                        <Route path="/cart" component={CartPage}/>
                    </div>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
