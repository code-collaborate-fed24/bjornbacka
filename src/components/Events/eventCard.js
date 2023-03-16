import React from 'react'

const EventCard = ({ eventImg, eventTitle }) => {
    return (
        <div className='event-card'>
            <img src={eventImg} alt={eventTitle}></img>
            <div className='eventOverlay'>
                <h2>{eventTitle}</h2>
            </div>

        </div>
    )

}

export default EventCard