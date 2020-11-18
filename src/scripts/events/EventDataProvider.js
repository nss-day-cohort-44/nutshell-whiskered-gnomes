// Author: Danny- create a component reponsible for getting events data from local API for upcoming events
let events = [];

const dispatchStateChangeEvent = () => {
    const eventStateChangedEvent = new CustomEvent("eventStateChanged");
    eventHub.dispatchEvent(eventStateChangedEvent);
};

export const useEvents = () => {
   const sortedByDate = events.sort(
       (currentEvent, nextEvent) =>
        Date.parse(currentEvent.date) - Date.parse(nextEvent.date)
   )
    return sortedByDate
};

export const getEvents = () => {
    return fetch("http://localhost:8088/events?_expand=user")
    .then((response) => response.json())
    .then((parsedEvents) => {
        // console.log(parsedEvents)
        events = parsedEvents;
    });
};

export const saveEvent = (event) => {
    return fetch("http://localhost:8088/events", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
    })
    .then(getEvents)
    .then(dispatchStateChangeEvent);
};

export const deleteEvent = (eventId) => {
    return fetch(`http://localhost:8088/events/${eventId}`, {
    method: "DELETE",
    }).then(getEvents);
};