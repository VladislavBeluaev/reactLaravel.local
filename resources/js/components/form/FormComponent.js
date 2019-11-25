import React, {Component} from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import {InputComponent} from "./InputComponent";
import {form} from "../../constants";

const Form = props=>{
    const {action,method,className,inputs} = props;
    return(
        <form action={action} method={method} className={className.join(' ')}>
            {
                inputs.map((input,index)=>
                <InputComponent {...input} key={index}/>
                )
            }

        </form>
    );
};
ReactDom.render(
    <Form {...form}/>,document.getElementById('user_greeting')
);