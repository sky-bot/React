import React, { Component } from 'react';
import GiveInput from "./Components/GiveInputs/GiveInputs"
import LittleBox from "./Components/LittleBox/LittleBox"
import './App.css';
import './Components/LittleBox/LittleBox.css'


class App extends Component {

  state = {
    strlen : 0,
    displayString : "Too Short",
    inputArray : []
  }

  deleteBoxHadler = (index) => {
    // const inputArray = [...this.state.inputArray]
    console.log(index)
    // this.setState(state_copy);
  }
  lengthVadidateHandler = (event) => {
    let input_string = event.target.value;
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
    state_copy.inputArray = input_string.split("");

    this.setState(state_copy);
  }


  render() {
    let box = null;
    box = (<div>
      {this.state.inputArray.map((charDisplay, index) =>{
        return <LittleBox 
        character={charDisplay}
        click={this.deleteBoxHadler(charDisplay)}/>
      })}
    </div>)
    return (
      <div className="App">
        <header className="App-header">
          <h1>Assignment2</h1>
        </header>
        <GiveInput changed={this.lengthVadidateHandler}/>
        <h1>{this.state.strlen}</h1>
        <h2>{this.state.displayString}</h2>
        <h3>{box}</h3>

      </div>
    );
  }

}

export default App;
