import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {FormComponent} from '../forms/FormComponent';
class ColorOrganizerComponent extends Component{
    constructor(props){
      super(props);
    }
    render() {
        let {form} =this.props;
        return (
            <div className="color-organizer">
                <h2>Органайзер цветов</h2>
                <FormComponent {...form}/>
            </div>
        );
    }
}
export {ColorOrganizerComponent}
