// Author: Danny- create a component reponsible for rendering a form for an event you want to create
const contentTarget = document.querySelector(".events");
const eventHub = document.querySelector(".container");

// listens for click event dispatched in AddEvent.js
eventHub.addEventListener("eventButtonClicked", () => {
    console.log("heard add event click")
    render()
})

const render = () => {
    contentTarget.innerHTML = `
        <h3>Your New Event</h3>
        <form class="eventForm">
        <input type="text" id="event--eventName" placeholder="Name Your Event">
        <input type="text" id="event--location" placeholder="Your Location Here"> 
        <input type="date" id="event--date">
        <button id="saveEvent">Save Event</button>
        </form>
        `
}

//create click event for Save Event button on form
// eventHub.addEventListener("click", (clickEvent) => {
//     if (clickEvent.target.id === "saveEvent") {
//     const saveEventClicked = new CustomEvent("saveEventClicked")
//         console.log(saveEventClicked, "save event button clicked")
//         eventHub.dispatchEvent(saveEventClicked)
//     }
// })