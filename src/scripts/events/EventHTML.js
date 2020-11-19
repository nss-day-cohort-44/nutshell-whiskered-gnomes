// Author: Danny- create a component reponsible for rendering an upcoming event as an HTML card 
export const eventHTML = (eventObj) => {
    if(eventObj.userId === parseInt(sessionStorage.getItem("activeUser"))) {
        return `
    <ul id="entry--${eventObj.id}" class="event__card ${eventObj.upcomingEvent ? `upcomingEvent`: ``}">
        <li>User: ${eventObj.user.username}</li>
        <li>Event: ${eventObj.eventName}</li>
        <li>Date: ${eventObj.date}</li>
        <li>Location: ${eventObj.location}</li>
        <button id="deleteEvent--${eventObj.id}">Delete</button>
    </ul>
    `;
    }
    else {
        return`
        <ul id="entry--${eventObj.id}" class="event__card ${eventObj.upcomingEvent ? `upcomingEvent`: ``}">
        <li>User: ${eventObj.user.username}</li>
        <li>Event: ${eventObj.eventName}</li>
        <li>Date: ${eventObj.date}</li>
        <li>Location: ${eventObj.location}</li>
    </ul>
    `; 
    }
};