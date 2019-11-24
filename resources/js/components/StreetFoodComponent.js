/**
 * Created by User on 24.11.2019.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {data} from "../constants";

const Header = props =>
    <h2>
        {props.headerName}
    </h2>;

const Ingridient = (ingridient, key) => {
    return (
        <tr className="ingridients-collection-item" key={key}>
            <th>{ingridient.name}</th>
            <th>{ingridient.amount}</th>
            <th>{ingridient.measurement}</th>
        </tr>
    )
};

const Ingridients = ({ingridientsCollection}) =>
    <table className="ingridients-collection">
        <thead>
        <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Measurement</th>
        </tr>
        </thead>
        <tbody>
        {ingridientsCollection.map((ingridient, index) => <Ingridient {...ingridient} key={index}/>)}
        </tbody>
    </table>;

const Step = ({stepName,index}) =>
    <li className="steps-collection-item" key={index}>
        { stepName}
    </li>;

const Steps = ({stepsList}) =>
<div className="steps-to-introduction">
    <h3>Steps introduction:</h3>
    <ol className="steps-collection" style={{marginTop:0}}>
        {
            stepsList.map((step, index) => <Step stepName={step} key={index}/>)
        }
    </ol>
</div>;

const ReceptCart = ({cartItem,index}) =>
    <div className="recept-cart" key={index}>
        <Header headerName={cartItem.name}/>
        <Ingridients ingridientsCollection={cartItem.ingredients}/>
        <Steps stepsList={cartItem.steps}/>
    </div>;
const ReceptCarts = ({receptCart}) =>
   receptCart.map((cart, index) => <ReceptCart cartItem={cart} key={index}/>);


const CookBook = ({recept}) =>
    <div className="cookBook">
        <ReceptCarts receptCart={recept}/>
    </div>;

ReactDOM.render(
    <CookBook
        recept={data}
    />, document.getElementById('main_content')
);
