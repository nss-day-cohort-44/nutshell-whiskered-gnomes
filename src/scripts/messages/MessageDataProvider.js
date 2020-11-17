// contains at least getMessages and useMessages
let messages = []

const eventHub = document.querySelector(".container")

export const getMessages = () => {
    return fetch("http://localhost:8088/messages?_expand=user")
    .then(response => response.json())
    .then(parsedMessages => {
        // console.log(parsedMessages)
        messages = parsedMessages
    })
}

export const useMessages = () => {
        const sortedByTimestamp = messages.sort(
            (a, b) => {
                return b.timestamp-a.timestamp}
                )
                console.log("sorted messages", sortedByTimestamp)
                return sortedByTimestamp
    }
