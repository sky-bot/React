import React from 'react'

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I am {props.name}. I am {props.age} year old.{props.children}</p>
            
        </div>
    
    );
};

export default person;