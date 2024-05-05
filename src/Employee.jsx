import React from 'react'

function Employee(props) {
    return (
        <div>
            <h4>Name:{props.name}</h4>
            <h5>Age:{props.age}</h5>
            <h5>Place:{props.place}</h5>
        </div>
    )
}

export default Employee