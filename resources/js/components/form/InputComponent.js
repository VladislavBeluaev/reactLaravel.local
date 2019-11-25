import React, {Component} from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

const InputComponent = props=>{
    const {name,type,is_required,className} = props;
    return (
        <input type={type} required={is_required} name={name} className={className.join(' ')}/>
    )
};
InputComponent.propsType = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    required: PropTypes.string.isRequired,
    className:PropTypes.array.isRequired
};
export {InputComponent}
