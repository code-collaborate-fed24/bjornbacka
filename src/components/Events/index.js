import React from 'react'
import "./events.css"
import EventCard from './eventCard'
const Events = () => {
    return (
        <section className='events-row'>
            <EventCard className="event-card" eventImg="./Assets/Events/Couple.png" eventTitle="Utomhusaktiviteter" />
            <EventCard className="event-card" eventImg="./Assets/Events/EventHall.png" eventTitle="Vår matfilosofi" />
        </section >
    )
}

export default Events