import React, {Component} from 'react';
import PropTypes from 'prop-types';

class InputComponent extends Component {
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
    }

    handler() {
        console.log(this.refs);
    }

    render() {
        const {name,type, is_required, placeholder, className} = this.props;
        return (
            <input type={type} required={is_required} name={name} placeholder={placeholder}
                   className={className.join(' ')}
            />
        )
    }
}

class RenderInputComponents extends Component{
    constructor(props){
        super(props);
    }
    render() {
        const {inputs} = this.props;
        return (
            inputs.map((input, index) =>
                <InputComponent {...input} key={index} ref={`single_input${index}`}/>
            )
        );
    }
}

/*const RenderInputComponents = ({inputs}) =>
    inputs.map((input, index) =>
        <InputComponent {...input} key={index}/>
    );*/
InputComponent.propsType = {
    name: PropTypes.string.isRequired,
    refs: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    required: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.array.isRequired
};
export {InputComponent, RenderInputComponents}
