import React, {Component} from 'react';
import FilterElement from "./FilterElement";

import './ProductFilter.css'

class ProductFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minPrice: props.minPrice,
            maxPrice: props.maxPrice,
            parameters: props.availableParameters.map(parameter =>
                ({
                    name: parameter.name,
                    options: parameter.options.map(option =>
                        ({
                            name: option,
                            checked: false
                        }))
                }))
        };
        for (let i = 0; i < props.checkedParameters.length; i++) {
            for (let j = 0; j < this.state.parameters.length; j++) {
                if (this.state.parameters[j].name === props.checkedParameters[i].name) {
                    this.checkOptions(this.state.parameters[j], props.checkedParameters[i].options);
                }
            }
        }
        this.onChange = props.onChange;
    }

    checkOptions = (parameter, checkedOptions) => {
        for (let i = 0; i < checkedOptions.length; i++) {
            for (let j = 0; j < parameter.options.length; j++) {
                if (parameter.options[j].name === checkedOptions[i]) {
                    parameter.options[j].checked = true;
                }
            }
        }
    };

    handlePriceChange = (filterElement) => {
        this.setState({
            minPrice: filterElement.minPrice,
            maxPrice: filterElement.maxPrice
        });
        this.onChangeCallback();
    };

    handleParametersChange = (filterElement) => {
        let parameters = [...this.state.parameters];
        for (let i = 0; i < parameters.length; i++) {
            if (parameters[i].name === filterElement.name) {
                parameters[i] = filterElement;
            }
        }
        this.setState({
            parameters: parameters
        });
        this.onChangeCallback();
    };

    onChangeCallback = () => {
        this.onChange({
            minPrice: this.state.minPrice,
            maxPrice: this.state.maxPrice,
            parameters: this.state.parameters
        })
    };

    render() {
        return (
            <div className="product-filter-container">
                <FilterElement key="price" name="price" open={true}
                               minPrice={this.state.minPrice}
                               maxPrice={this.state.maxPrice}
                               changeCallback={this.handlePriceChange}/>
                {
                    this.state.parameters.map(p => {
                        return (<FilterElement key={p.name} {...p} changeCallback={this.handleParametersChange}/>);
                    })
                }
            </div>
        );
    }
}

export default ProductFilter;