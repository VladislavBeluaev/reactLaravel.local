import React, {Component} from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import {InputComponent, RenderInputComponents} from "./InputComponent";
import {ButtonComponent, RenderButtonComponents} from "./ButtonComponent";
import {form} from "../../constants";

export default class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
        this.inputsRenderRef = React.createRef();
    }

    submitHandler(e) {
        e.preventDefault();
        console.dir(this.refs);
        /* const {_color,_hex} = this.refs;
         console.log(`Current color name ${_color.value}, current hex-code ${_hex.value}`);
         _color.value = '';
         _hex.value = '#fff';*/


    }
    componentDidMount() {
        this.textInput.focus();
    }

    focusTextInput() {
        // Установим фокус на текстовое поле с помощью чистого DOM API
        // Примечание: обращаемся к "current", чтобы получить DOM-узел
        this.inputsRenderRef.current.focus();
    }
    render() {
        const {action, method, className, inputs, buttons} = this.props;
        return (
            <form action={action} method={method} className={className.join(' ')} onSubmit={this.submitHandler}>
                {inputs.map((input, index) =>
                    <InputComponent {...input} key={index} ref={(input) => { this.textInput = input; }}/>)}
                <RenderButtonComponents buttons={buttons}/>
            </form>
        );
    }
}
FormComponent.propTypes = {
    action: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    className: PropTypes.array.isRequired,
    inputs: PropTypes.array.isRequired,
};

ReactDom.render(
    <FormComponent {...form}/>, document.getElementById('user_greeting')
);