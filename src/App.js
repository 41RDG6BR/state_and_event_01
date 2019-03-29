import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      name:"Rodrigo"
    }
    this.changeState = this.changeState.bind(this)
    this.resetState = this.resetState.bind(this)
  }

  changeState(){
    this.setState({
      name:"Rodrigo Nogueira"
    })
  }

  resetState(){
    this.setState({
      name:"Rodrigo"
    })
  }

  render() {
    return (
      <div className="App">
      <div>{this.state.name}</div>        
      <button onClick={this.changeState}>Mudar status</button>
      <button onClick={this.resetState}>Reset status</button>
      </div>
    );
  }
}

export default App;
