// Author: Danny- create a component reponsible for rendering a form for an event you want to create

import { getUsers, useUsers } from "../../UsersDataProvider.js";


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
        <h3>Your New Event</h3>
        <input type="text" id="event--eventName" placeholder="Name Your Event">
        <input type="text" id="event--location" placeholder="Your Location Here"> 
        <input type="date" id="event--date">
        <button id="saveEvent">Save Event</button>
        `;
};