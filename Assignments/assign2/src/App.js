import React, { Component } from 'react';
import GiveInput from "./Components/GiveInputs/GiveInputs"
import LittleBox from "./Components/LittleBox/LittleBox"
import Validation from "./Components/Validation/Validation"
import './App.css';
import './Components/LittleBox/LittleBox.css'


class App extends Component {

  state = {
    inputString : "" 
  }

  deleteBoxHandler = ( index ) => {
    const inputArray = this.state.inputString.split("");
    inputArray.splice(index, 1);
    const updatedString = inputArray.join("");
    this.setState({inputString: updatedString});
    // console.log(index)
    
  }

  lengthVadidateHandler = (event) => {
    this.setState({inputString: event.target.value});
  }


  render() {
    const charList = this.state.inputString.split("").map((charDisplay, index) =>{
        return <LittleBox 
        character={charDisplay} 
        key={index}
        clicked={() => this.deleteBoxHandler(index)}/>
      });
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>Assignment2</h1>
        </header>
        <GiveInput type="text" changed={this.lengthVadidateHandler} val={this.state.inputString}/>
        <h1>{this.state.inputString.length}</h1>
        <h2>{this.state.inputString}</h2> 
        <Validation inputLength={this.state.inputString.length}/>
        {charList}
      </div>
    );
  }

}

export default App;
