import React from 'react'
import "./events.css"

const EventCard = (props) => {
    return (
        <div className='event-card'>
            <img src={props.eventImg} alt={props.eventTitle}></img>
            <div className='eventOverlay'>
                <p>{props.eventTitle}</p>
            </div>
        </div>
    )

}

export default EventCard