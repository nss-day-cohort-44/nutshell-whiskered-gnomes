// Author: Danny- create a component reponsible for rendering an upcoming event as an HTML card 
export const eventHTML = (eventObj) => {
    return `
    <ul id="entry--${eventObj.id}" class="event__card">
        <li>user: ${eventObj.user.userName}</li>
        <li>Event: ${eventObj.eventName}</li>
        <li>Date: ${eventObj.date}</li>
        <li>Location: ${eventObj.location}</li>
        <button id="deleteEvent--${eventObj.id}">Delete</button>
    </ul>
    `;
};