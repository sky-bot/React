import React, { Component } from 'react';
import './Components/GiveInput/GiveInput'
import './App.css';
import GiveInput from  './Components/GiveInput/GiveInput'

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
            Is It Working
          </h1>
        </header>
        <GiveInput 
        changed={this.nameChangeHandler}
        />
        <h2> {this.state.person[0].name}</h2>
      </div>
    );
  }
}
export default App;
