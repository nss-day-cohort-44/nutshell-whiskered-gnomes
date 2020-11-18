/* author: Kristen Steele | 
module purpose: provides functionality to populate message html to the DOM */

// import messageHTML, getMessages, useMessages
import { getMessages, useMessages } from "./MessageDataProvider.js"
import { messageHTML } from "./MessageHTML.js"

// define eventHub and contentTarget
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".message__list")

// should the variables needed be modular in scope?
let messages = []

/* MessageList will call getMessages, useMessages, and render. */
export const MessageList = () => {
    getMessages()
        .then(() => {
            messages = useMessages()
            
            // console.log("MessageList messages: ", messages)
        }).then(renderMessages)
}

/* render defines an empty string to hold html reps, 
iterates through messages array and calls messageHTML for each message obj,
then appends the html reps to the dom in ascending order. */
const renderMessages = () => {
    let messagesHTMLrepresentations = ""
    
    for (const messageObj of messages) {
        messagesHTMLrepresentations += messageHTML(messageObj)
    }
    
    // console.log("this should be a string of html", messagesHTMLrepresentations)

    contentTarget.innerHTML = `
        <h3>Public Chat</h3>
        ${messagesHTMLrepresentations}
    `
}

/* add event listener to listen for message dp state change event for when a message is 
added or deleted? Does the whole list really need to re-render each time a message is added?
Or deleted? */
eventHub.addEventListener("messageStateChanged", () => MessageList())

/* add event listener to listen to delete message click and pass a detail of the id
of the message to delete? */





