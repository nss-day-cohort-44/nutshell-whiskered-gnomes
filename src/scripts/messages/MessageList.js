/* author: Kristen Steele | 
module purpose: provides functionality to populate messages html to the DOM, 
and listen for events involving the message representations on the DOM */

// import messageHTML, getMessages, useMessages
import { deleteMessage, getMessages, useMessages } from "./MessageDataProvider.js"
import { messageHTML } from "./MessageHTML.js"

// define eventHub and contentTarget
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".message__list")
const headerElement = document.querySelector(".message_header")

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
    if (sessionStorage.activeUser){
        let messagesHTMLrepresentations = ""
        
        for (const messageObj of messages) {
            messagesHTMLrepresentations += messageHTML(messageObj)
    }
    // console.log("this should be a string of html", messagesHTMLrepresentations)
    contentTarget.innerHTML = `
    ${messagesHTMLrepresentations}
    `
    headerElement.innerHTML = `Chat`
}
}

/* event listener to listen for message dp state change event for when a message is 
added or deleted */
eventHub.addEventListener("messageStateChanged", () => MessageList())

/* event listener to listen to delete message click and pass the id
of the message as an argument to deleteMessage */
eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteMessage--")){
    // console.log("exterminate!");
    var [prefix, id] = event.target.id.split("--")
    // console.log(prefix, id);
    deleteMessage(id)}
})





