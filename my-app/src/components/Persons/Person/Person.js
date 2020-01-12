import React, { Component, Fragment } from 'react';
import styled from 'styled-components'
import Aux from '../../../hoc/Aux';
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


class Person extends Component {
    render() {
        console.log('[Person.js] rendering')
        return (
        <Fragment> 
        <StyledDiv>
            <p key='p1' onClick={this.props.click}>I am {this.props.name}. I am {this.props.age} year old.</p>
            <p key='p2'>{this.props.children}</p>
            <input key='i3' type="text" onChange={this.props.changed} value={this.props.name} />

        </StyledDiv>
        </Fragment>
    );
    }
};

export default Person;