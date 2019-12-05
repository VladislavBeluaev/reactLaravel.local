import React, {Component} from 'react';
import PropTypes from 'prop-types';

class StarComponent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let {isSelectedStar,selectedStarClassName,clickHandler} = this.props;
        return (
            <p className={isSelectedStar===false?'star':`star ${selectedStarClassName}`} onClick={clickHandler}>
                <span className="fa fa-star">{}</span>
            </p>
        );
    }
}

class StarRatting extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedStar:0
        };
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(index){
        this.setState({
            selectedStar:index
        });
    }
    render() {
        let {count,...starData} = this.props;
        return (
            <div className="card-ratting">
                <h6>Отзывы</h6>
                <div className="star-wrapper">
                    {
                        [...Array(count)].map((item,i)=>
                            <StarComponent {...starData} clickHandler={()=>{
                                this.clickHandler(i+1)
                            }} key={i}/>
                        )
                    }
                </div>
            </div>
        );
    }
}
export {StarRatting}
