// Author: Danny- create a component reponsible for envoking all the other components in this module and rendering
// a list of events to the DOM 
import { getEvents, useEvents, deleteEvent } from "./EventDataProvider.js"

const eventHub = document.querySelector(".container");

export const EventList = () => {
    getEvents()
        .then(() => {
        const events = useEvents();
        render(events);
    });
};

eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id.startsWith("deleteEvent--")) {
    const [prefix, id] = clickEvent.target.id.split("--");
    
        deleteEvent(id).then(() => {
        const updatedEvents = useEvents();
        render(updatedEvents);
        });
    }
});