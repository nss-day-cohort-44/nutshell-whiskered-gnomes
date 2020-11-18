// Author: Danny- create a component reponsible for getting events data from local API for upcoming events

import { allFriendsURL } from "../friends/FriendsDataProvider.js"

let events = [];
let allFriends

const dispatchStateChangeEvent = () => {
    const eventStateChangedEvent = new CustomEvent("eventStateChanged");
    eventHub.dispatchEvent(eventStateChangedEvent);
};

export const useEvents = () => {
    return events.slice();
};

export const getEvents = () => {
    debugger
    allFriends = allFriendsURL()
    return fetch(`http://localhost:8088/events?${allFriends}&_expand=user`)
        .then((response) => response.json())
        .then((parsedEvents) => {
            console.log(`http://localhost:8088/events?${allFriends}&_expand=user`)
            console.log(parsedEvents)
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