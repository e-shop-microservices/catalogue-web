import React, {Component} from 'react';

import './PriceFilterElement.css'

class PriceFilterElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            minPrice: props.minPrice,
            maxPrice: props.maxPrice
        };
        this.changeCallback = props.changeCallback;
    }

    handleMinPriceChange = (event) => {
        this.setState({
            minPrice: event.target.value
        }, () => {
            this.changeCallback({...this.state});
        });
    };

    handleMaxPriceChange = (event) => {
        this.setState({
            maxPrice: event.target.value
        }, () => {
            this.changeCallback({...this.state});
        });
    };

    render() {
        return (
            <div className="price-filter-container">
                $ <input type="number" className="price-filter-input" value={this.state.minPrice}
                         onChange={this.handleMinPriceChange}/>
                <span className="price-filter-between">-</span>
                $ <input type="number" className="price-filter-input" value={this.state.maxPrice}
                         onChange={this.handleMaxPriceChange}/>
            </div>
        );
    }
}

export default PriceFilterElement;
