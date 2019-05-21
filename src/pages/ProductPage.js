import React, {Component} from 'react';

import CatalogueApi from '../api/catalogue'

import './ProductPage.css'
import GorganyButton from "../components/GorganyButton";

class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productId: this.props.match.params.id,
            product: {}
        };
        CatalogueApi.getProductById(this.props.match.params.id)
            .then(product => {
                this.setState({
                    product: product
                })
            })
    }

    render() {
        return (
            <div className="product-page-container">
                <div className="product-page-info">
                    <div className="product-page-image-container">
                        <img className="product-page-image" src="/product.jpg" alt={this.state.product.name}/>
                    </div>
                    <div className="product-page-parameters">
                        <h2>{this.state.product.name}</h2>
                        <h1 className="product-page-price">{this.state.product.price} USD</h1>
                        {
                            this.state.product.parameters
                                ? this.state.product.parameters.map(p => (
                                    <div className="product-page-parameter">
                                        <span><b>{p.name}:</b> {p.value}</span>
                                    </div>
                                ))
                                : null
                        }
                        <GorganyButton title="Add to Cart"/>
                    </div>
                </div>
                <div className="product-page-description-container">
                    <h2>Description</h2>
                    <div className="product-page-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisi dui, iaculis eu vehicula
                        vitae, lacinia non orci. Nunc lacinia erat ligula, in tristique ipsum egestas quis. Integer
                        auctor hendrerit nisi, a gravida libero ornare id. Donec nulla ex, mattis id egestas et, cursus
                        quis nisi. Quisque accumsan ornare lectus quis aliquam. Donec id ex nec diam tincidunt dignissim
                        ac sed dui. Pellentesque molestie facilisis arcu, at varius ligula. Cras ullamcorper odio at
                        tellus tincidunt hendrerit nec et elit.
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductPage;