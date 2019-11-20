import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {phones} from "../constants";
export default class Header extends Component {
    static inlinePhones(phones) {
        return phones.map((phone,i)=>{
            return <li key={i}>{phone}</li>;
        });
    }
    constructor(props) {
        super(props);
        this._headerContent = "Main header";
        this._headerElement = <h1>{this._headerContent}</h1>;
        this._contacts = (<ul>{Header.inlinePhones(phones)}</ul>);
        this._element = React.createElement(
            'h2',
            {className: 'greeting testing'},
            new Date().toLocaleTimeString()
        );
    };
    static timer(){
        let elem =
            <div>
                <p>Time is:</p>
                <h1>{new Date().toLocaleTimeString()}</h1>
            </div>;
        ReactDOM.render(elem, document.getElementById('header'));
    }

    render() {
        return (
            this._element
        );
    }
}

if (document.getElementById('header')) {
    ReactDOM.render(<Header />, document.getElementById('header'))
    //setInterval(Header.timer,1000);
}
