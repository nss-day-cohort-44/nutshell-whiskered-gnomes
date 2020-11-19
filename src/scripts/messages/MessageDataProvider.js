/* author: Kristen Steele | module purpose: to interact with the json resources */

// holds messages array in modular scope
let messages = []

// will be used later for event listener
const eventHub = document.querySelector(".container")

// retrieves and parses data from json messages resource and stores parsed data in messages array with modular scope
export const getMessages = () => {
    return fetch("http://localhost:8088/messages?_expand=user")
    .then(response => response.json())
    .then(parsedMessages => {
        // console.log(parsedMessages)
        messages = parsedMessages
    })
}
// uses the messages array populated by getMessages, sorts by timestamp in ascending order and returns new array for use
export const useMessages = () => {
        const sortedByTimestamp = messages.sort(
            (a, b) => {
                return a.timestamp-b.timestamp}
                )
                // console.log("sorted messages", sortedByTimestamp)
                return sortedByTimestamp
    }
/* called by the event listener in MessageForm. 
posts new message object to messages json resource, then calls dispatchStateChangeEvent function*/
export const saveMessage = object => {
    return fetch("http://localhost:8088/messages", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'},
        body: JSON.stringify(object)
    })
    .then(dispatchStateChangeEvent)
}
// called by the event listener in MessageList. Sends a fetch/DELETE request to the messages json resource
export const deleteMessage = messageId => {
    return fetch(`http://localhost:8088/messages/${messageId}`, {
        method: "DELETE"
    })
    .then(dispatchStateChangeEvent)
}

/* dispatches a custom event. should be called whenever there is a message 
saved or deleted. picked up by MessageList to re-render messages with latest list. */
const dispatchStateChangeEvent = () => {
    const messageStateChangedEvent = new CustomEvent("messageStateChanged")
    eventHub.dispatchEvent(messageStateChangedEvent)
}
