import React, {Component} from 'react';
import ReactDom from 'react-dom';

/*function AlertBox(props){
    return <div style={props.css}>
        {props.message}
    </div>
}

let data = {
    good:{
        css:{
            backgroundColor:"green",
            color:"white"
        },
        text:"Success"
    },
    error:{
        css:{
            backgroundColor:"red",
            color:"white"
        },
        text:"Errors Occurs"
    },
};
export default class App extends Component{
    constructor(props){
        super(props);
    }
    render() {
        let random = Math.random();

        return random>0.5 ?<AlertBox css={this.props.goodCss} message={this.props.goodText}/>:
            <AlertBox css={this.props.errorCss} message={this.props.errorText}/>;
    }
}*/
function SuccessMessage(props) {
    return (
        <div className={'message message_success'}>
            <MessageContent title={props.title}>{props.children}</MessageContent>
        </div>
    );
}

function MessageContent(props) {
    return (
        <div className="message__content">
            <h3 className="message__title">{props.title}</h3>
            <p className="message__text">{props.children}</p>
        </div>
    );
}
function App(){
    return (
        <div>
            <SuccessMessage title="Успех">Операция завершена успешно!</SuccessMessage>
        </div>
    );
}

ReactDom.render(
    <App/>,document.getElementById('main_content')
);
/*ReactDOM.render(<App
    goodCss={data.good.css}
    goodText = {data.good.text}
    errorCss={data.error.css}
    errorText = {data.error.text}

/>,document.getElementById('main_content'));*/
/*export default class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {message:new Date().toLocaleTimeString()};
        this._timerId = null;
    }
    _currentTime(){
        this.setState({
            message:new Date().toLocaleTimeString()
        })
    }
    componentDidMount() {
        this._timerId = setInterval(()=>this._currentTime(),1000);
    }
    componentWillMount() {
        clearInterval(this._timerId);
    }

    render() {
        let time = this.state.message;
        return (
            <div className="current-clock">
                <p>Текущее время</p>
                <p>{time}</p>
            </div>
        );
    }
}*/
/*
ReactDom.render(
    <Clock/>,document.getElementById('main_content')
);*/
