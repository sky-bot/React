import React from 'react';

const boxIt = (props) => {
    return (
        <div className="boxContainer">
            <div className="smallBox">
                <h3 onClick={props.click}>{props.character}</h3>
            </div>
        </div>
    )
}

export default boxIt;