import React, {Component} from 'react';

import './ColorFilter.css'

class ColorFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 'color',
            name: props.name,
            availableColors: props.availableColors
        };
    }

    render() {
        return (
            <div className="color-filter-container">
                {
                    this.state.availableColors.map(color =>
                        <div className="color-filter-element" style={{background: color}}/>
                    )
                }
            </div>
        );
    }
}

export default ColorFilter;
