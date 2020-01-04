import React, { Component } from 'react';
import styled from 'styled-components';
// import classes from './App.css';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
// import './Person/Person.css'

import Persons from '../components/Persons/Persons';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red':'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  margin: 10px;

  &:hover {
    background-color: lightgreen;
    color: black;
  }
`;

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
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />

          {/* {this.state.persons.map((person, index) => {
            return<Person
              click={this.deletePersonHandler.bind(this.index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}
            />
          })} */}
        </div>

      );

    }

    let classes = ['red', 'bold'].join(" ");

    if (this.state.persons.length % 2 === 1) {
      classes = ["blue", "bold"].join(" ");
    }



    return (

      <div className="App">
        {persons}
      </div>


    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
