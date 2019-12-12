import React, { Component } from 'react';
import GiveInput from "./Components/GiveInputs/GiveInputs"
import LittleBox from "./Components/LittleBox/LittleBox"
import './App.css';
import './Components/LittleBox/LittleBox.css'


class App extends Component {

  state = {
    strlen : 0,
    displayString : "Too Short",
    inputString : "" 
  }

  deleteBoxHandler = (character, index ) => {
    // const inputArray = [...this.state.inputArray]
    console.log(index+":"+character)
    const inputString = this.state.inputString; 
    console.log(inputString.replace(character,""))
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
    state_copy.inputString = input_string;

    this.setState(state_copy);
  }


  render() {
    let box = null;
    box = (<div>
      {this.state.inputString.split("").map((charDisplay, index) =>{
        return <LittleBox 
        character={charDisplay}
        id={charDisplay+index} 
        click={this.deleteBoxHandler(index)}/>
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
        <h2>{this.state.inputString}</h2>
        <h3>{box}</h3>

      </div>
    );
  }

}

export default App;
