import React from 'react';
import Footer from './components/Footer'
import Header from "./components/Header";
import ProductContainer from "./components/ProductContainer";
import Product from "./components/Product";
import CategoryBanner from "./components/CategoryBanner";

import CartPage from "./pages/cart/index"
import ProductSearchPage from "./pages/products";
import Collapsible from 'react-collapsible';


function App() {
    return (
        <div className="App">
            <Header/>
            <ProductSearchPage searchRequest={{}}/>
            <Footer/>
        </div>
    );
}

export default App;
