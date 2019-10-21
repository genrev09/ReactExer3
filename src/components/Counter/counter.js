import React from 'react';
import './counter.css';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {number: 0};
    }

    increment = ()=> {this.setState({number: this.state.number += 1});
                    this.props.onCounterValueChange(1);
                }
    decrement = ()=> {this.setState({number: this.state.number -= 1});
    this.props.onCounterValueChange(-1);}

    render(){
        return (
            <div className="App">
                <button className="Button" onClick={this.increment}> + </button>
                {this.state.number}
                <button className="Button" onClick={this.decrement}> - </button>
                
            </div>
        );
    }
}

export default Counter;