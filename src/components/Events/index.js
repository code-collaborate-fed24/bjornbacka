import React from 'react'
import "./events.css"
import EventCard from './eventCard'
import EventData from '../../Data/Events-component-data'
const Events = () => {
    return (
        <section className='events-row'>
            {EventData.map(eventItem => (
                <EventCard
                    key={eventItem.id}
                    className="event-card"
                    eventImg={eventItem.image}
                    eventTitle={eventItem.information}
                />
            ))
            }
        </section >
    )
}

export default Events