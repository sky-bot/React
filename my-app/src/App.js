import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state= {
    persons: [
      { name: 'Akash', age: 22 },
      { name: 'sky-bot', age: 29 },
      { name: 'Riti', age: 21 }
    ]
  }

  switchNameHandler = () => {
    console.log('Was Clicked');
    // this.state.persons[0].name = 'Akash Pani';
    this.setState({ 
      persons: [
      { name: 'Akash Pani', age: 22 },
      { name: 'sky-bot', age: 29 },
      { name: 'Riti', age: 21 }
    ]
  })

  }


  render() {
    return (
      <div className="App">
        <h1>Hi, I am React App</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch names</button>
        <Person name = { this.state.persons[0].name } age = { this.state.persons[0].age }></Person>
        <Person name = { this.state.persons[1].name } age = { this.state.persons[1].age }></Person>
        <Person name = { this.state.persons[2].name } age = { this.state.persons[2].age }></Person>
      </div>
  );
      // console.log({logo})
      // return React.createElement('div', { className: 'App'},
      //  React.createElement('img', {src: "logo.svg", className: 'App-logo', alt: "unable to display"}),
      //   React.createElement('h1', null, 'Hello World..!!!!'));  
  }
}

export default App;
