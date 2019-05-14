import React, {Component} from 'react';

import './PriceFilter.css'

class PriceFilter extends Component {
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
                $ <input className="price-filter-input" value={this.state.minPrice}/>
                <span className="price-filter-between">-</span>
                $ <input className="price-filter-input" value={this.state.maxPrice}/>
            </div>
        );
    }
}

export default PriceFilter;
