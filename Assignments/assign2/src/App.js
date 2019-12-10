import React, { Component } from 'react';
import GiveInput from "./Components/GiveInputs/GiveInputs"
import './App.css';

class App extends Component {

  state = {
    strlen : 0,
    displayString : "Too Short"
  }

  lengthVadidateHandler = (event) => {
    let input_length = event.target.value.length;
    // inputLength = input_string.length;
    let displayString="";
    if (input_length < 6)
    {
      displayString = "Too SRort";
    }
    else{
      displayString = "Long Enough";
    }

    let state_copy = {...this.state}
    state_copy.strlen = input_length;
    state_copy.displayString = displayString;

    this.setState(state_copy);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Assignment2</h1>
        </header>
        <GiveInput changed={this.lengthVadidateHandler}/>
        <h1>{this.state.strlen}</h1>
        <h2>{this.state.displayString}</h2>
      </div>
    );
  }

}

export default App;
