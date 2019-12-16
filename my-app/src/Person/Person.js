import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
width: 450px;
margin: auto;
border: 1px solid #eee;
box-shadow: 0 2px 3px #ccc;
padding: 16px;
text-align: center;

@media (min-width: 500px): {
    width: 80px;
}
`;


const person = (props) => {
    return (
        // <div className="Person" style={style}>
        <StyledDiv>
            <p onClick={props.click}>I am {props.name}. I am {props.age} year old</p>.
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />

        </StyledDiv>
    );
};

export default person;