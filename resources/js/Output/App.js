import React, {Component} from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import {news,starsRatting} from "./news_data/constants";
import {NewsComponents} from "../components/news/NewsComponents";

const App = ({news,newsRatting}) => {
   return(
       <div className="container">
           <div className="newsWrapper">
               {
                   news.map((newsItem,index)=>{
                       let data = {...newsItem,newsRatting};
                        return   <NewsComponents {...data} key={index}/>
                   }

                   )
               }
           </div>
       </div>
   );
};

ReactDom.render(<App
    news={news} newsRatting={starsRatting}/>, document.getElementById('main_content'));
