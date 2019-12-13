import React from 'react';

const boxIt = (props) => {
    return (
        <div className="boxContainer"  onClick={props.clicked}>
                <h3>{props.character}</h3>
        </div>
    )
}

export default boxIt;