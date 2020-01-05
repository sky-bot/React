import React from 'react';
import styled from 'styled-components';
import classes from './Cockpit.css'

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

const cockpit = (props) => {

    let classes = ['red', 'bold'].join(" ");
 
    if (props.persons.length % 2 === 1) {
      classes = ["blue", "bold"].join(" ");
    }

    return (
    <div className={classes.Cockpit}>
        <h1>Hi, I'm a React App</h1>
        <p className={classes}> This is really working!</p>
        <StyledButton alt={props.showPersons}
        onClick={props.clicked}>Toggle Name</StyledButton>);
    </div>
    );
};

export default cockpit;