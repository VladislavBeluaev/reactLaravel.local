import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Clicker extends Component {
    constructor(props) {
        super(props);
        this.increment = 0;
        this.state = {
            clickQty: [],
            clickDateTime: null

        };
    }
    clickHandler(e) {
        let target = e.target;
        if (target.tagName !== 'BUTTON') return false;
        this.setState((prevState, props) => ({
            clickQty: prevState.clickQty.push(++this.increment),
            clickDateTime: new Date().toLocaleTimeString()
        }));
    }

    /*componentDidMount() {
    }*/
    render() {
        let rows = this.state.clickQty;
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
                    <tbody>
                    {/*{this.state.clickQty.map((r) => (
                        <tr>
                            <td>{r}</td>
                            <td>{this.state.clickDateTime}</td>
                        </tr>
                    ))}*/}
                    </tbody>
                </table>
                <button onClick={this.clickHandler.bind(this)}>Нажми на меня</button>
            </div>
        );
    }
}


ReactDOM.render(
    <Clicker/>, document.getElementById('user_greeting')
);
