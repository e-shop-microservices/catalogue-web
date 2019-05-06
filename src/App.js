import React from 'react';
import Footer from './components/Footer'
import Header from "./components/Header";
import ProductContainer from "./components/ProductContainer";
import CategoryBanner from "./components/CategoryBanner";

function App() {
    return (
        <div className="App">
            <Header/>
            <ProductContainer/>

            <div style={{
                background: 'lightgray',
                width: '500px',
                height: '350px'
            }}>
                <CategoryBanner imagePath="/backpacks.jpg" bannerText="Backpacks"/>
            </div>

            <Footer/>
        </div>
    );
}

export default App;
