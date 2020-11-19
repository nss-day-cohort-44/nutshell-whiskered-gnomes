// Author: Danny- create a component reponsible for rendering an upcoming event as an HTML card 
export const eventHTML = (eventObj) => {
    return `
    <div id="entry--${eventObj.id}" class="event__card ${eventObj.upcomingEvent ? `upcomingEvent`: ``}">
        <p>User: ${eventObj.user.username}</p>
        <p>Event: ${eventObj.eventName}</p>
        <p>Date: ${eventObj.date}</p>
        <p>Location: ${eventObj.location}</p>
        <button id="deleteEvent--${eventObj.id}">Delete</button>
        <button id="weatherButton">Weather</button>
    </div>
    `;
};