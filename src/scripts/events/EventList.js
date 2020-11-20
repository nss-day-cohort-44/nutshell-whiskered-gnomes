// Author: Danny- create a component reponsible for envoking all the other components in this module and rendering
// a list of events to the DOM 
import { getEvents, useEvents, deleteEvent } from "./EventDataProvider.js"
import { eventHTML } from "./EventHTML.js";

const eventHub = document.querySelector(".container");
const eventsContainer = document.querySelector(".eventsList");
const headerElement = document.querySelector(".events_header")

export const EventList = () => {
    getEvents()
        .then(() => {
        const events = useEvents();
        // console.log(events)
        render(events);
    });
};

const render = (eventsArray) => {
    let eventsHTMLRepresentation = "";
    eventsArray[0].upcomingEvent = true;
    for (const event of eventsArray) {
        eventsHTMLRepresentation += eventHTML(event);
    }
    eventsContainer.innerHTML = `
        <div class="Events__Aside">
        ${eventsHTMLRepresentation}
        </div>               
        `;
    headerElement.innerHTML = `Events`
}

eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id.startsWith("deleteEvent--")) {
    const [prefix, id] = clickEvent.target.id.split("--");
    
        deleteEvent(id).then(() => {
        const updatedEvents = useEvents();
        render(updatedEvents);
        });
    }
});