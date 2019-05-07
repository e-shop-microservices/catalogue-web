import React from 'react';
import Footer from './components/Footer'
import Header from "./components/Header";
import ProductContainer from "./components/ProductContainer";
import Product from "./components/Product";
import CategoryBanner from "./components/CategoryBanner";

function App() {
    return (
        <div className="App">
            {/*<Header/>*/}
            <ProductContainer/>


            {/*<Product name="Штани Trimm Jurry" price="1234 грн." imagePath="/product.jpg"/>*/}

            {/*<div style={{*/}
            {/*    background: 'lightgray',*/}
            {/*    width: '500px',*/}
            {/*    height: '350px'*/}
            {/*}}>*/}
            {/*    <CategoryBanner imagePath="/backpacks.jpg" bannerText="Backpacks"/>*/}
            {/*</div>*/}

            {/*<Footer/>*/}
        </div>
    );
}

export default App;
