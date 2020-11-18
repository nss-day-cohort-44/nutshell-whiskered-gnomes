// Author: Danny- create a component reponsible for envoking all the other components in this module and rendering
// a list of events to the DOM 
import { getUsers, useUsers } from "../../UsersDataProvider.js";
import { getEvents, useEvents, deleteEvent } from "./EventDataProvider.js"
import { eventHTML } from "./EventHTML.js";

const eventHub = document.querySelector(".container");
const eventsContainer = document.querySelector(".eventsList");

export const EventList = () => {
    getEvents()
        .then(() => {
        const events = useEvents();
});
const render = (eventsArray) => {
    let eventsHTMLRepresentation = "";
    eventsArray[0].upcomingEvent = true;
    for (const event of eventsArray) {
        eventsHTMLRepresentation += eventHTML(event);
    }
    eventsContainer.innerHTML = `
        <div class="Events__Aside">
        <h3 class="events__header">Events</h3>
        ${eventsHTMLRepresentation}
        </div>               
        `;
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