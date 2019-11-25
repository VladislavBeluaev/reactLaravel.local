import React ,{Component} from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import {test_data,recept} from "../constants";
export default class ShortDescriptionComponent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {ingridientsQty,stepsQty} = this.props;
        return (
          <p className="short-description">
              <span>Qty of ingridients: {ingridientsQty}.</span>
              <span>Qty of steps: {stepsQty}</span>
          </p>
        );
    }
}
ShortDescriptionComponent.propTypes  = {
    ingridientsQty:PropTypes.number.isRequired,
    stepsQty:PropTypes.number.isRequired,
};
ShortDescriptionComponent.defaultProps = {
    ingredients: 0,
    steps: 0,
};