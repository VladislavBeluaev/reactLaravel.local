import React, {Component} from 'react';
import PropTypes from 'prop-types'
import InputComponent from "../forms/InputComponent";
import ButtonComponent from "./ButtonComponent";

class FormComponent extends Component{

    constructor(props){
        super(props)
    }
    render() {
        let {method,action,classes,inputs,button} = this.props;
        return (
            <form method={method} action={action}>
                <div className={classes}>
                    {
                        inputs.map((input,index)=>
                            <div key={index}>
                                <InputComponent {...input}/>
                            </div>
                        )
                    }
                    <div>
                        <ButtonComponent {...button}/>
                    </div>
                </div>
            </form>
        )
    }
}
export {FormComponent}



