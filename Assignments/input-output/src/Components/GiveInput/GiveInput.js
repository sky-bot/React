import React from 'react';
import './GiveInput.css';

const giveinput = (props) => {
    return (
        <div className="GiveInput">
            <div className="inputContainer">
            <input type="text"
            className="inputBox" 
            onChange={props.changed} 
            placeholder="Enter your Input"/>
            </div>
           
        </div>
    )
}

export default giveinput;