import React, {Component} from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import {starsAttributes} from "./stars_files/constants";
import {onClick} from "./stars_files/events.handlers";
import {StarItem, StarWrapper} from "../components/star_rating/StarComponent";

const App = (props) => {
    let {starsCount, starItem, starWrapper} = props.star;
    let stars = [];
    while (starsCount) {
        stars.push(<StarItem className={starItem.className} key={starsCount}/>);
        starsCount--;
    }
    return (
        <StarWrapper className={starWrapper.className}
                                children={stars} onClick={onClick}/>
    )

};


ReactDom.render(<App
    star={starsAttributes}/>, document.getElementById('main_content'));
