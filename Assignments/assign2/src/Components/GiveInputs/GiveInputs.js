import React from 'react';
import './GiveInputs.css'

const giveinputs = (props) => {
    return (
        <div>
            <input type = "text"
            onChange={props.changed}
            value={props.val}
            placeholder="Enter your Inputs"/>
        </div>
    )
}

export default giveinputs;
