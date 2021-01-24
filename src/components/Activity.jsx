import React from 'react'

const Activity = (props) => {
    return (
        <div className={'activity-wrapper'}>
            <p>Activity: {props.name}, Duration: {props.duration}</p>
            <button>Delete</button>
        </div>
    )
}

export default Activity
