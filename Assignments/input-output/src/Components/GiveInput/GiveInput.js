import React from 'react';
import './GiveInput.css'

const giveinput = (props) => {
    return (
        <div>
            <input type="text" 
            onChange={props.changed} 
            placeholder="Enter your Input"/>
        </div>
    )
}

export default giveinput;