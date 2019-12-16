import React from 'react'

const table = (props) => {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th className="cols">Key</th>
                        <th className="cols">Value</th>
                    </tr>
                </thead>
                <tbody>
                    {props.item}
                </tbody>

            </table>
        </div>
    )
}

export default table;

