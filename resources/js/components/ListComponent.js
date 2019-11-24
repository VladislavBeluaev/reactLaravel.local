import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {recipeIngridients} from "../constants";
const ListComponent = ({list})=>{
    return React.createElement('ul',{className:name},
        list.map((item,i)=>React.createElement('li',{key:i},item))
    );
};

const Wrapper = ({items})=>{
    console.log(items);
    return React.createElement('div',{},<ListComponent className="testing" list={items}/>)
};
/*export default class ListComponent extends Component{
    constructor(props){
        super(props);
    }

    static renderLi(item,i){
        return React.createElement('li',{key:i},item);
    }
    render(){
        let list = this.props.list;
        return React.createElement('ul',{className:this.props.className},
            list.map(ListComponent.renderLi)
        );

    }
}*/
/*
ReactDom.render(
 <Wrapper
    className="container"
     items={
         recipeIngridients[0]
     }
 />, document.getElementById("main_content")
 );*/
