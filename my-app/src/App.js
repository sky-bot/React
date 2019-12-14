import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium'
import './App.css';
import './Person/Person.css'

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'asds', name: 'Max', age: 28 },
      { id: 'adfg', name: 'Manu', age: 29 },
      { id: 'fege', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };


  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }


  toggleNameHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  };


  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }



  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      margin: '10px',
      ':hover': {
        backgroundColor: 'yellow',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={this.deletePersonHandler.bind(this.index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}
            />
          })}
        </div>

      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'lightgreen',
        color: 'black'
      };
    }

    let classes = ['red', 'bold'].join(" ");

    if (this.state.persons.length % 2 === 1) {
      classes = ["blue", "bold"].join(" ");
    }



    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes}> This is really working!</p>
          <button style={style} onClick={this.toggleNameHandler}>Toggle Name</button>
          {persons}
        </div>
      </StyleRoot>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default Radium(App);
