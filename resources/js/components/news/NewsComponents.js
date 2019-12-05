import React, {Component} from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import {StarRatting} from "../star_rating/StarComponent"
class NewsComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(e) {
        let target = e.target;
        e.preventDefault(target.tagName);
        if (target.tagName !== 'A') return false;
        this.setState(prevState => ({
            visible: !prevState.visible
        }));
    }
    render() {
        let {author, text, bigText,newsRatting:ratting} = this.props;
        let {visible} = this.state;
        return (
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{author}</h5>
                    <p className="card-text">{text}...</p>
                    <p className={visible !== false ? 'card-text' : 'd-none'}>{bigText}</p>
                    <a href="#" className="card-link" onClick={this.clickHandler}>
                        {visible === false ? 'Читать далее' : 'Свернуть описание'}
                    </a>
                    {<StarRatting {...ratting}/>}
                </div>
            </div>
        );
    }

}
NewsComponents.propsType = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    bigText: PropTypes.string.isRequired,
};
export {NewsComponents}
