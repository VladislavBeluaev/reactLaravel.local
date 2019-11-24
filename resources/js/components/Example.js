import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Clicker extends Component {
    constructor(props) {
        super(props);
        this.increment = 0;
        this.state = {
            clickQty: [],
            clickDateTime: []

        };
    }

    clickHandler(e) {
        let target = e.target;
        if (target.tagName !== 'BUTTON') return false;
        let rows = this.state.clickQty;
        let clickTimes = this.state.clickDateTime;
        rows.push(++this.increment);
        clickTimes.push(new Date().toLocaleTimeString());
        this.setState(() => ({
            clickQty: rows,
            clickDateTime: clickTimes
        }));
    }

    /*componentDidMount() {
    }*/
    render() {
        let rows = this.state.clickQty;
        let clickDate = this.state.clickDateTime;
        console.log(rows);
        return (
            <div className="container">
                <table className="container">
                    <thead>
                    <tr>
                        <th>Номер клика</th>
                        <th>Время клика</th>
                    </tr>
                    </thead>
                    <tbody>{
                        rows.map((row,i)=>{
                            return(<tr key={i}>
                                <td>{row}</td>
                                <td>{clickDate[i]}</td>
                            </tr>)
                        })
                    }
                    </tbody>
                </table>
                <button onClick={this.clickHandler.bind(this)}>Нажми на меня</button>
            </div>
        );
    }
}
/*


ReactDOM.render(
    <Clicker/>, document.getElementById('user_greeting')
);
*/
