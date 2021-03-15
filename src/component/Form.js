import React, {Component} from 'react';

class Form extends Component {

    state ={
        inputNumber: ''
    }

    onClick = (value) => {
        const {inputNumber} = this.state;
        this.setState({
            inputNumber: inputNumber + value
        })
    }

    onResult = () => {
        const {inputNumber} = this.state;
        const result = eval(inputNumber);
        this.setState({
            inputNumber: result
        })

        this.props.onResult(result);
    }

    onReplace = () => {
        this.setState({
            inputNumber: ''
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => {this.onClick('1')}}>1</button>
                <button onClick={() => {this.onClick('2')}}>2</button>
                <button onClick={() => {this.onClick('3')}}>3</button>
                <button onClick={() => {this.onClick('+')}}>+</button>
                <button onClick={this.onReplace}>AC</button><br/>
                <button onClick={() => {this.onClick('4')}}>4</button>
                <button onClick={() => {this.onClick('5')}}>5</button>
                <button onClick={() => {this.onClick('6')}}>6</button>
                <button onClick={() => {this.onClick('-')}}>-</button><br/>
                <button onClick={() => {this.onClick('7')}}>7</button>
                <button onClick={() => {this.onClick('8')}}>8</button>
                <button onClick={() => {this.onClick('9')}}>9</button>
                <button onClick={() => {this.onClick('0')}}>0</button>
                <button onClick={this.onResult}>=</button>

                <div>{this.state.inputNumber}</div>
            </div>
        )
    }
}

export default Form;