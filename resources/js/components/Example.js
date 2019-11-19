import React, { Component } from 'react';
import ReactDOM from 'react-dom';
function existsId(id) {
    return document.getElementById(id);
}
let users = [
    {
        name:"Ivan",
        lName:"Budko"
    },
    {
        name:"Peter",
        lName:"Bouto"
    },
    {
        name:"Glen",
        lName:"Malkin"
    },
    ]

;
function Welcome(props) {
    return <div>
        <span>{props.name}</span>
        <span>{props.lName}</span>
    </div>;
}

function App(persons) {
   return (persons.map((person,i)=>{
        return <Welcome key={i} name={person.name} lName={person.lName}/>
    }));
}
//const greetingUser = <Welcome name={user.name} lName={user.lName}/>;
    ReactDOM.render(App(users),document.getElementById('user_greeting'));
