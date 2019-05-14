import React, {Component} from 'react';

import './ColorFilter.css'

class ColorFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 'color',
            name: props.name,
            options: props.options
        }
    }

    render() {
        return (
            <div>
                <h1>COLOR</h1>
            </div>
        );
    }
}

export default ColorFilter;
