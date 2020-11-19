/* author: Kristen Steele | module purpsose: return html representation for an obj

/* messageHTML is called by render on MessageList. This takes an object as an argument 
and returns an html representation of that object, showing username and message.
- use the userId to get username
- needs message id so message can be deleted
- needs user id to add user as friend when clicked
- username hyperlinked so it can be clicked to add user as friend
- visual representation of a way to delete each message 
- stretch: is there a way to put an active user class on messages by the active user so they can be styled separately?
 */
 export const messageHTML = messageObj => {
     return `
     <div class="message__card">
        <p><a href="#" id="addFriend--${messageObj.user.username}">${messageObj.user.username}</a>: ${messageObj.message}</p>
        <button id="deleteMessage--${messageObj.id}">delete</button>
     </div>
     `
 }

const eventHub = document.querySelector(".container")

 // Dispatches userId from input form
eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("addFriend")) {
        // debugger
        const [prefix, friendName] = event.target.id.split("--")

        let alert = confirm(`Add ${friendName} to your friends?`)
        if (alert === true){
            const saveEvent = new CustomEvent("addSavedFriend", {
                detail: {
                    friendUsername: friendName
                }
            })
            eventHub.dispatchEvent(saveEvent)
        }
    }
})