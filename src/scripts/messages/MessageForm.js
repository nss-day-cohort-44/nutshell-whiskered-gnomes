/* author: Kristen Steele | module purpose: renders a chat form to the dom, 
then listens for the form button click, saves input values and uses them as 
an argument to call the saveMessage function */

const eventHub = document.querySelector(".container")

/* MessageForm is called by Nutshell.
This function defines a content target and adds to it the html to render a message form 
for adding a new message to the public chat, consisting of an input field and a send button. */
export const MessageForm = () => {
    const contentTarget = document.querySelector(".message__form")
    contentTarget.innerHTML = `
    <textarea class="message__field" id="message__field" placeholder="type message here"></textarea>
    <button id="saveMessage">send</button>
    `
}

/* This page needs an event listener to listen for the click of the send button,
gather values from the form, build an object, and call the 
addMessage function with the object used as argument */
eventHub.addEventListener("click", event => {
    if (event.target.id === "saveMessage"){
        console.log(event)
        const userId = parseInt(sessionStorage.getItem("activeUser"))
        const message = document.querySelector(".message__field").value 
        const timestamp = event.timeStamp

        const newMessageObj = {
            userId,
            message,
            timestamp
        }
    }
    console.log("new message: ", newMessageObj)
})