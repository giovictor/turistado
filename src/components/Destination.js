import React from 'react'

const Destination = (props) => {
    return (
        <div className="col-sm-3 destination">
            <img src={props.src} alt={props.key} className="destinationThumbnail"/>
            <div className="destinationInfo">
                
            </div>
        </div>
    )
}

export default Destination
