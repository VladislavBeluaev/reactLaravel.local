import React, {Component} from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

class StarComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            selected:false,
            starSelectedIndex:0
        }
    }
    render(){
        let {count,selectedStarClassName} = this.props;
        let {selected:isSelected,starSelectedIndex} = this.state;
        return (
            <p className={isSelected===false?'star':`star ${selectedStarClassName}`}>
                <span className="fa fa-star">{}</span>
            </p>
        );
    }
}
