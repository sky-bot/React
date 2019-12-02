// import React, { Component } from 'react';
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {

const [personsState, setPersonState ] = useState({
    persons: [
      { name: 'Akash', age: 22 },
      { name: 'sky-bot', age: 29 },
      { name: 'Riti', age: 21 }
    ]
  });

  const switchNameHandler = () => {
  console.log('Was Clicked');
  // this.state.persons[0].name = 'Akash Pani';
  setPersonState({ 
    persons: [
    { name: 'Akash Pani', age: 22 },
    { name: 'sky-bot', age: 29 },
    { name: 'Riti', age: 21 }
  ]
})

}



    return (
      <div className="App">
        <h1>Hi, I am React App</h1>
        <p>This is really working</p>
        <button onClick={switchNameHandler}>Switch names</button>
        <Person name = { personsState.persons[0].name } age = { personsState.persons[0].age }></Person>
        <Person name = { personsState.persons[1].name } age = { personsState.persons[1].age }></Person>
        <Person name = { personsState.persons[2].name } age = { personsState.persons[2].age }></Person>
      </div>
  );
      // console.log({logo})
      // return React.createElement('div', { className: 'App'},
      //  React.createElement('img', {src: "logo.svg", className: 'App-logo', alt: "unable to display"}),
      //   React.createElement('h1', null, 'Hello World..!!!!'));  
  }

export default app;
// export default App;


// state= {
//   persons: [
//     { name: 'Akash', age: 22 },
//     { name: 'sky-bot', age: 29 },
//     { name: 'Riti', age: 21 }
//   ]
// }

