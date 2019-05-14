import React, {Component} from 'react';
import FilterElement from "./FilterElement";

import './ProductFilter.css'

class ProductFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parameters: props.parameters
        }
    }

    render() {
        return (
            <div className="product-filter-container">
                {
                    this.state.parameters.map(p => (<FilterElement {...p}/>))
                }
            </div>
        );
    }
}

export default ProductFilter;