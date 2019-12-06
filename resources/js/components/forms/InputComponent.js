import React, {Component} from 'react';
import PropTypes from 'prop-types'

export default class InputComponent extends Component{
    constructor(props){
        super(props)
    }

    render() {
        return(
            <input {...this.props}/>
        );
    }
}
