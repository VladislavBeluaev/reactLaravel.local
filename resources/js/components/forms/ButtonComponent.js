import React, {Component} from 'react';
import PropTypes from 'prop-types'

 export default class ButtonComponent extends Component{
    constructor(props){
        super(props)
    }

    render() {
        return(
            <button {...this.props}> Добавить цвет</button>
        );
    }
}
