import React from 'react'

const person = (props) => {
    return (
        <div>
            <p>I am {props.name}. I am {props.age} year old.{props.children}</p>
            
        </div>
    
    );
};

export default person;