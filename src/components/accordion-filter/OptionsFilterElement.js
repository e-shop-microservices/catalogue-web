import React, {Component} from 'react';
import {Checkbox} from 'pretty-checkbox-react';

import './OptionsFilterElement.scss'

class OptionsFilterElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            options: props.options
        }
    }

    render() {
        return (
            <div className="options-filter-container">
                {
                    this.state.options.map(option =>
                        <div className="options-filter-checkbox-wrapper">
                            <Checkbox style="thick" animation="smooth" color="danger-o">
                                {option}
                            </Checkbox>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default OptionsFilterElement;
