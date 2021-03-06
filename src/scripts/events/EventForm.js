// Author: Danny- create a component reponsible for rendering a form for an event you want to create
import { saveEvent } from "./EventDataProvider.js";

const contentTarget = document.querySelector(".eventsForm");
const eventHub = document.querySelector(".container");

// listens for click event dispatched in AddEvent.js
eventHub.addEventListener("eventButtonClicked", () => {
    console.log("heard add event click")
    render()
})

const render = () => {
    contentTarget.innerHTML = `
        <form class="eventForm">
            <h3>Your New Event</h3>
            <input type="text" id="event--eventName" placeholder="Name Your Event">
            <input type="text" id="event--location" placeholder="Your Location Here"> 
            <input type="date" id="event--date">
            <button id="saveEvent">Save Event</button>
        </form>
        `
}

// create click event for Save Event button on form
eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "saveEvent") {
    const userId= parseInt(sessionStorage.getItem("activeUser"));
    const eventName = document.querySelector("#event--eventName").value;
    const location = document.querySelector("#event--location").value;
    const date = document.querySelector("#event--date").value;
      // Make a new object representation of an event
    const newEvent = {
        // Key/value pairs here
        userId,
        eventName,
        location,
        date,
    };
    // Change API state and application state
    saveEvent(newEvent);
    }
})