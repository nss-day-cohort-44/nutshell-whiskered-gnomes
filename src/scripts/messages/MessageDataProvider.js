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
                return b.timestamp-a.timestamp}
                )
                // console.log("sorted messages", sortedByTimestamp)
                return sortedByTimestamp
    }

export const saveMessage = object => {
    return fetch("http://localhost:8088/messages", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'},
        body: JSON.stringify(object)
    })
    .then(dispatchStateChangeEvent)
}

const dispatchStateChangeEvent = () => {
    const messageStateChangedEvent = new CustomEvent("messageStateChanged")
    eventHub.dispatchEvent(messageStateChangedEvent)
}
