// import messageHTML, getMessages, useMessages
import { getMessages, useMessages } from "./MessageDataProvider.js"
import { messageHTML } from "./MessageHTML.js"

// define eventHub and contentTarget
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".messages")

// should the variables needed be modular in scope?
let messages = []

/* MessageList will call getMessages, useMessages, and render.
Should I limit the number of messages that come back in the array?
Is this where they should be sorted by timestamp? */
export const MessageList = () => {
    getMessages()
        .then(() => {
            messages = useMessages()
            
            // console.log("MessageList messages: ", messages)
        }).then(renderMessages)
}

/* render will define an empty string to hold html reps, 
iterate through messages array and call messageHTML for each message obj,
then append the html reps to the dom in ascending order. 
Is this where ascending order should be implemented? */
const renderMessages = () => {
    let messagesHTMLrepresentations = ""
    
    for (const messageObj of messages) {
        messagesHTMLrepresentations += messageHTML(messageObj)
    }
    
    console.log("this should be a string of html", messagesHTMLrepresentations)

    contentTarget.innerHTML = `
        <h3>Public Chat</h3>
        <div class="message__list>
            ${messagesHTMLrepresentations}
        </div>
    `
}



/* add event listener to listen for message dp state change event for when a message is 
added or deleted? Does the whole list really need to re-render each time a message is added?
Or deleted? */

/* add event listener to listen to delete message click and pass a detail of the id
of the message to delete? */





