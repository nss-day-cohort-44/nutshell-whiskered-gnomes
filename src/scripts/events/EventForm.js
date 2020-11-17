// Author: Danny- create a component reponsible for rendering a form for an event you want to create
import { getUsers, useUsers } from "../src/UsersDataProvider.js";

const contentTarget = document.querySelector(".events");
const eventHub = document.querySelector(".container");

export const EventForm = () => {
    getUsers().then(() => {
        const usersArray = useUsers();
    render(usersArray);
    });
};

const render = (users) => {
    contentTarget.innerHTML = `
        <input type="text" id="event--eventName" placeholder="Name Your Event">
        <input type="text" id="event--location" placeholder="Your Location Here"> 
        <input type="date" id="event--date">
        <select id="noteForm--criminal" class="criminalSelect">
            <option value="0">Please select a suspect..</option>
            ${criminals
            .map((criminalObj) => {
                return `<option value="${criminalObj.id}">${criminalObj.name}</option>`;
            })
            .join("")}
        </select> 
            <button id="saveEvent">Save Event</button>
        `;
};