import React, {Component} from 'react';
import {Checkbox} from 'pretty-checkbox-react';

import './OptionsFilterElement.scss'

class OptionsFilterElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            options: props.options,
        };
        this.changeCallback = props.changeCallback;
    }

    handleCheckboxChange = (optionName, event) => {
        let options = [...this.state.options];
        for (let i = 0; i < options.length; i++) {
            if (options[i].name === optionName) {
                options[i].checked = event.target.checked;
            }
        }
        this.setState({
            options: options
        });
        if (this.changeCallback) {
            this.changeCallback({...this.state});
        }
    };

    render() {
        return (
            <div className="options-filter-container">
                {
                    this.state.options.map(option =>
                        <div key={option.name} className="options-filter-checkbox-wrapper">
                            <Checkbox style="thick" animation="smooth" color="danger-o"
                                      checked={option.checked}
                                      onChange={(event) => {
                                          this.handleCheckboxChange(option.name, event)
                                      }}>
                                {option.name}
                            </Checkbox>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default OptionsFilterElement;
