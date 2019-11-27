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
        if(this.props.refs.length)
        this.InputRefs = [];
    }
    submitHandler(e) {
        e.preventDefault();
        if(!this.InputRefs.length) return false;
        let [_color,_hex] = this.InputRefs.map((item)=>ReactDom.findDOMNode(item));
        console.log(_hex.value);
    }
    initRefs(node){
        if(this.InputRefs!==null && Array.isArray(this.InputRefs))
            this.InputRefs.push(node);
    }
    componentDidMount() {
        ReactDom.findDOMNode(this.InputRefs[0]).focus();
    }

    focusTextInput() {
    }
    render() {
        const {action, method, className, inputs, buttons} = this.props;
        return (
            <form action={action} method={method} className={className.join(' ')} onSubmit={this.submitHandler}>
                {inputs.map((input, index) =>
                    <InputComponent {...input} key={index} ref={ this.initRefs.bind(this)}/>)}
                <RenderButtonComponents buttons={buttons}/>
            </form>
        );
    }
}
FormComponent.propTypes = {
    action: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    className: PropTypes.array.isRequired,
    refs:PropTypes.array.isRequired,
    inputs: PropTypes.array.isRequired,
};

ReactDom.render(
    <FormComponent {...form}/>, document.getElementById('user_greeting')
);