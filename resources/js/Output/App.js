import React, {Component} from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
/*import {starsAttributes} from "./stars_files/constants";
import {onClick} from "./stars_files/events.handlers";
import {StarItem, StarWrapper} from "../components/star_rating/StarComponent";*/
import {news} from "./news_data/constants";
import {NewsComponents} from "../components/news/NewsComponents";

const App = ({news}) => {
   return(
       <div className="container">
           <div className="newsWrapper">
               {
                   news.map((newsItem,index)=>
                       <NewsComponents {...newsItem} key={index}/>
                   )
               }
           </div>
       </div>
   )
    ;
    /*let {starsCount, starItem, starWrapper} = props.star;
    let stars = [];
    while (starsCount) {
        stars.push(<StarItem
            className={starItem.className}
            selected={starItem.selected}
                             key={starsCount}/>);
        starsCount--;
    }
    return (
        <StarWrapper className={starWrapper.className}
                                children={stars} onClick={onClick}/>
    )*/

};


ReactDom.render(<App
    news={news}/>, document.getElementById('main_content'));
