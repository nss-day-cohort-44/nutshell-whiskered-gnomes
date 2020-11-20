/* author: Kristen Steele | 
module purpsose: return html representation for an obj, listens for username click on message cards */

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
        <p class="meesage__text"><a href="#" id="addMessageFriend--${messageObj.user.username}">${messageObj.user.username}</a><br>${messageObj.message}</p>
        <button class="deleteButton" id="deleteMessage--${messageObj.id}">delete</button>
     </div>
     `
 }
/* listens for click of username on message cards
when clicked, alert window appears asking if the active user wants to add chosen user to friends
if okay clicked, chosen user's name is sent as a detail along with "addSavedFriend" in dispatch event*/
const eventHub = document.querySelector(".container")

 // Dispatches userId from input form
eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("addMessageFriend")) {
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