import React, {Component} from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

class NewsComponents extends Component{
    constructor(props){
        super(props);
        this.state = {
            visible:false
        }
    }
    render() {
        let {author, text, bigText} = this.props;
        let {visible} = this.state;
        return (
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{author}</h5>
                    <p className="card-text">{text}...</p>
                    {/*<p className="card-text">{bigText}</p>*/}
                    <a href="#" className="card-link">Читать далее</a>
                </div>
            </div>
        );
    }

}
NewsComponents.propsType = {
    author:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired,
    bigText:PropTypes.string.isRequired,
};
export {NewsComponents}