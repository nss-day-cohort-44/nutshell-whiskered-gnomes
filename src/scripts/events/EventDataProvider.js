// Author: Danny- create a component reponsible for getting events data from local API for upcoming events 
let events = [];

export const useEvents = () => {
    return events.slice();
};

export const getEvents = () => {
    return fetch("http://localhost:8088/events?_expand=user")
    .then((response) => response.json())
    .then((parsedEvents) => {
        console.log(parsedEvents)
        events = parsedEvents;
    });
};
