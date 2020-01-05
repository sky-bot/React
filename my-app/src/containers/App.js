import React, { Component } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';



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
      console.log("inside")
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
    }

    return (
      <div className="App">
        <Cockpit 
          showPersons = {this.state.showPersons}
          persons = {this.state.persons}
          clicked={this.toggleNameHandler}
        />
        {persons}
      </div>


    );

  }
}

export default App;