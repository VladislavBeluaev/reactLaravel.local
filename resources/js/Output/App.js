import React, {Component} from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import {news,starsRatting} from "./news_data/constants";
import {NewsComponents} from "../components/news/NewsComponents";
import {ColorOrganizerComponent} from "../components/color_organizer/ColorOrganizerComponent";
import {colorOrganizer} from "./color_organizer/constants";

const App = ({newsData,colorOrganizerData}) => {
    let {news,starsRatting:newsRatting} = newsData;
    //let {colorOrganizerData} =colorOrganizerData;
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
           <ColorOrganizerComponent {...colorOrganizerData}/>
           <div className="color-set">
               <div className="color-set-item">
                   <div className="item-header">
                       <p>Черный</p>
                       <button><span className="fa fa-close">{}</span></button>
                   </div>
                   <div className="item-content">
                       <p></p>
                   </div>
               </div>
           </div>
       </div>
   );
};

let newsData = {news,starsRatting};
ReactDom.render(<App
    newsData={newsData}
    colorOrganizerData={colorOrganizer}
    />,

    document.getElementById('main_content'));
