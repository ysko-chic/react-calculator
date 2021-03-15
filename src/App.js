import React, {Component} from 'react';
import Form from './component/Form';
import ResultList from './component/ResultList';

class App extends Component {

  id = -1;

  state = {
    resultlist: [
      
    ]
  }

  onResult = (result) => {
    const {resultlist} = this.state;
    this.setState({
      resultlist: resultlist.concat({id: this.id++, resultlist: result})
    })
  }

  render() {
    return(
      <div>
        <Form onResult={this.onResult} />
        <br/><br/><br/><br/>
        <ResultList resultlist={this.state.resultlist}/>
      </div>
    )
  }
}

export default App;