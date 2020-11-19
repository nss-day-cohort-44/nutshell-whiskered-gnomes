// Author: Danny- create a component reponsible for saving/adding an event to upcoming events 
const contentTarget = document.querySelector(".eventsForm")
const eventHub = document.querySelector(".container")


export const renderEventsButton = () => {

    contentTarget.innerHTML = `
    <button id="add-event-button">Add New Event</button>
    `
}

eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "add-event-button") {
    const eventButtonClicked = new CustomEvent("eventButtonClicked")
    console.log(eventButtonClicked, "event button clicked")
    eventHub.dispatchEvent(eventButtonClicked)
    }
})