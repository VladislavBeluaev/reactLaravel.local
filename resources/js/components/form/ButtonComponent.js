import React, {Component} from 'react';
import PropTypes from 'prop-types';
const Button = props=>{
    const {type, title,className,events} = props;
    const attributes = {
        type:type,
        className:className.join(" ")
    };
    if(events.length!==0)
    events.forEach((item)=>{
        let key = Object.keys(item)[0];
        Object.defineProperty(attributes,key,{value:item[key],enumerable:true});
    }
        );
    return React.createElement('button',attributes,title);
};
const RenderButtonComponents= ({buttons})=>
    buttons.map((button,index)=>
        <Button {...button} key={index}/>
    );
 Button.propType = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    className:PropTypes.array.isRequired,
};
export {Button,RenderButtonComponents}