// Author: Danny- create a component reponsible for rendering an upcoming event as an HTML card 
const eventHub = document.querySelector(".container");

// the first line in the html includes what is called a ternary statement 

export const eventHTML = (eventObj) => {
    if(eventObj.userId === parseInt(sessionStorage.getItem("activeUser"))) {
    return `
    <div id="entry--${eventObj.id}" class="event__card ${eventObj.upcomingEvent ? `upcomingEvent`: ``}">
        <p class="username">${eventObj.user.username}</p>
        <p>Event: ${eventObj.eventName}</p>
        <p>Date: ${eventObj.date}</p>
        <p>Location: ${eventObj.location}</p>
        <button class="deleteButton" id="deleteEvent--${eventObj.id}">Delete</button>
        <button class="deleteButton" id="weatherButton">Weather</button>
    </div>
    `;
    }
    else {
        return`
    <div id="entry--${eventObj.id}" class="event__card ${eventObj.upcomingEvent ? `upcomingEvent`: ``}">
        <p class="username">${eventObj.user.username}</p>
        <p>Event: ${eventObj.eventName}</p>
        <p>Date: ${eventObj.date}</p>
        <p>Location: ${eventObj.location}</p>
    </div>
    `; 
    }
};