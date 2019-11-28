import React, {Component} from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

const StarItem = ({className}) => {
    return (
        <p>
            <span className={className.join(" ")}>{null}</span>
        </p>

    );
};
StarItem.propTypes = {
    className: PropTypes.array.isRequired
};

const StarWrapper = ({className,children,...events}) => {
    return React.createElement('div',{
        className:className,
        ...events
    },children);
};

StarWrapper.propTypes = {
    className: PropTypes.array.isRequired,
    children: PropTypes.array.isRequired,
};
export {StarItem,StarWrapper}