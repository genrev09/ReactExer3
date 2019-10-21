import React from 'react';
import Counter from '../Counter/counter';

class CounterGroup extends React.Component{
    constructor(props){
        super(props);
        this.state = {counterCounts: this.props.defaultCounts,
        inputValue: this.props.defaultCounts,
        sum: 0};
    }

    render(){
        let counters = this.renderCounters();
        return(
            <div>
                <input type ="text" value={this.state.inputValue} onChange={this.handleInputChange}></input>
                <button onClick={this.regenerateCounters}>Regenerate counters</button>
                <span>Sum: {this.state.sum}</span>
                {counters}
            </div>
        );
    }
    regenerateCounters = () =>{this.setState({counterCounts: this.state.inputValue});}
    handleInputChange = (event) => this.setState({inputValue: event.target.value});
    renderCounters = () => {
        let counters = [];
        for (let count = 0; count < this.state.counterCounts; count++) {
            counters.push(<Counter key={count} onCounterValueChange={this.counterUpdateCallBack}/>);
        }
        return counters;
    }
    counterUpdateCallBack = changeNum => {
        this.setState({sum: this.state.sum + changeNum});
    }
}

export default CounterGroup;