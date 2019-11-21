import {Menu} from "./classses/Menu.class";
import {Header} from "./classses/Header.class";
import {ReactDOM} from 'react-dom';
(function ($) {
$(function () {
    'use strict';
    let list = [
        { title: "Rad Red"},
        { title: "Lawn"},
        { title: "Party Pink"}
    ];
    let addColor= (title,colorList=list)=>
        [...colorList,{title}];

    /*console.log(addColor('Glam Green'));
    console.log(list);*/

    let person = {
        name: 'Ivan',
        l_name:'Budaev',
        is_educated:false,
    };
    let selfUpdate= (person)=>({
        ...person,
        is_educated: true
    });
    console.log(selfUpdate(person));
    console.log(person);
});
})(jQuery);

