/* messageHTML is called by render on MessageList. This takes an object as an argument 
and returns an html representation of that object, showing username and message.
- use the userId to get username
- needs message id so message can be deleted
- needs user id to add user as friend when clicked
- does username need to be a hyperlinked so it can be clicked to add user as friend?
- is there a way to put an active user class on messages by the active user so they can be styled separately?
- there also needs to be some visual representation of a way to delete each message 
 */

 export const messageHTML = messageObj => {
     return `
     <div class="message__card">
        <p id="${messageObj.user.id}">${messageObj.user.username}: ${messageObj.message}</p>
        <button id="deleteMessage--${messageObj.id}">delete</button>
     </div>
     `
 }