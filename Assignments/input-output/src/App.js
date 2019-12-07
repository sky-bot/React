import React, { Component } from 'react';
import './Components/GiveInput/GiveInput'
import './App.css';
import GiveInput from  './Components/GiveInput/GiveInput'
import TakeOutput from './Components/TakeOutput/TakeOutput'

class App extends Component {

  state = {
    person: [
      { name : 'Akash'}
    ]
  }

  nameChangeHandler = (event) => {
    this.setState({
      person: [
        {name: event.target.value}
      ]
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Assignment 1
          </h1>
        </header>
        <GiveInput 
        changed={this.nameChangeHandler}  
        />
        <TakeOutput
        name={this.state.person[0].name}
        />
        <TakeOutput name="Akash (not supposed to be changed) to be changed)"/>

        <h2>-Akash Pani</h2>
      </div>
    );
  }
}
export default App;
