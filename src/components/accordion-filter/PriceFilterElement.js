import React, {Component} from 'react';

import './PriceFilterElement.css'

class PriceFilterElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 'price',
            name: props.name,
            minPrice: props.minPrice,
            maxPrice: props.maxPrice
        }
    }

    render() {
        return (
            <div className="price-filter-container">
                $ <input type="number" className="price-filter-input" value={this.state.minPrice}/>
                <span className="price-filter-between">-</span>
                $ <input type="number" className="price-filter-input" value={this.state.maxPrice}/>
            </div>
        );
    }
}

export default PriceFilterElement;
