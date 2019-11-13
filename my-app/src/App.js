import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello World..!!!</h1>
          <Person></Person>
        </header>
      </div>
  );
      // console.log({logo})
      // return React.createElement('div', { className: 'App'},
      //  React.createElement('img', {src: "logo.svg", className: 'App-logo', alt: "unable to display"}),
      //   React.createElement('h1', null, 'Hello World..!!!!'));  
  }
}

export default App;
