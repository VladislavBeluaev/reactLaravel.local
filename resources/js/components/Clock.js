import React, {Component} from 'react';
import ReactDom from 'react-dom';

let recipeIngridients = [
    [
        "1 lb Salmon",
        "1 cup Pine Nuts",
        "2 cups Butter Lettuce",
        "1 Yellow Squash",
        "1/2 cup Olive Oil",
        "3 cloves of Garlic",
    ],
    [
        "1 lb Salmon",
        "1 cup Pine Nuts",
        "2 cups Butter Lettuce",
        "1 Yellow Squash",
        "1/2 cup Olive Oil",
        "3 cloves of Garlic",
    ],
    [
        "1 lb Salmon",
        "1 cup Pine Nuts",
        "2 cups Butter Lettuce",
        "1 Yellow Squash",
        "1/2 cup Olive Oil",
        "3 cloves of Garlic",
    ]
];
let headersAttr = [
    {
        "Baker Salomon": {
            id: "recipe-0",
            "data-type": "title",
            "data-react-root": "title"
        }
    },
];
console.log(headersAttr);

export default class Clock extends Component {
    constructor(props) {
        super(props);
    }

    static renderLi(ingridient, i) {
        return React.createElement('li', {key: i}, ingridient);
    }

    static renderHeader() {
        return React.createElement("h1", {
            id: "recipe-0",
            "data-type": "title",
            "data-react-root": "title",
        }, "Baker Salomon");
    }

    static renderReceptCart(uniqueIndex) {
        let [,...partials] = arguments;
        //console.log(partials);
        //let args = [...['div',{key:uniqueIndex,className: "recept-cart"},],...partials];
        //console.log(...partials);
        //React.createElement.apply(null,args);
        React.createElement('div', {key:uniqueIndex,className: "recept-cart"},...partials);
    }

    render() {
        let header = React.createElement("h1", {
            id: "recipe-0",
            "data-type": "title",
            "data-react-root": "title",
        }, "Baker Salomon");
        let recipeIngridientsLists = this.props.recipeIngridients;
        return recipeIngridientsLists.map((list, i) => {
                let ul = React.createElement('ul', {key: i},
                    list.map((item, i) => Clock.renderLi(item,i ))
                );
           return Clock.renderReceptCart(i,header, ul);
            }
        );
        /*let recipeList = React.createElement('ul', {},
            this.props.recipeIngridients.map((item, i) => Clock.renderLi(item, i))
        );*/
        //return React.createElement('div', {className: "container"}, header, recipeList);

    }
}
ReactDom.render(
    React.createElement('div', {key:1,className: "recept-cart"},Clock.renderHeader()),document.getElementById('main_content')
);
