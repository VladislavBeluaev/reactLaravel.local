import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {recipeIngridients,recipeNames} from "../constants";
export default class Clock extends Component {
    constructor(props) {
        super(props);
    }

    static renderLi(ingridient, i) {
        return React.createElement('li', {key: i}, ingridient);
    }

     renderHeader(index) {
        let recipeNames =this.props.recipeNames;
         return React.createElement("h2", {
             id: `recipe-header-${index}`,
             key:`${index}recipe`,
             "data-type": "title",
             "data-react-root": "title",
         }, Object.keys(recipeNames[index])[0])

    }

    static renderReceptCart(uniqueIndex, components = null) {
        let [, ...partials] = arguments;
        return partials.length !== 0 ? React.createElement('div', {
            key: uniqueIndex,
            className: "recept-cart"
        }, ...partials)
            :React.createElement('div', {
                key: uniqueIndex,
                className: "recept-cart"
            });
    }

    render() {
        let recipeIngridientsLists = this.props.recipeIngridients;
        return recipeIngridientsLists.map((list, i) => {
                let ul = React.createElement('ul', {key: i},
                    list.map((item, i) => Clock.renderLi(item, i))
                );
                return Clock.renderReceptCart(i, this.renderHeader(i), ul);
            }
        );
    }
}
/*ReactDom.render(
    <Clock
        recipeIngridients={recipeIngridients}
        recipeNames={recipeNames}
    />, document.getElementById("main_content")
);*/
