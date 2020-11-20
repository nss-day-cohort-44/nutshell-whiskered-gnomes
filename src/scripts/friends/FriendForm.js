// Heath Lester
// Provides at function that renders a form to add friends to the /friends endpoint.


const eventHub = document.querySelector(".container")
const friendElement = document.querySelector(".friends")


// Responds to Add Friend button and renders form; also un-renders if form is present.
eventHub.addEventListener("add_Friend", () => {
    // console.log(friendElement.childNodes.length)
    // console.log(friendElement.childNodes)
    // debugger
    if (friendElement.childNodes.length <= 8) {
        friendElement.innerHTML += `
        <div class="addFriend__form">
            <input type="text" id="addFriend__text" placeholder="Enter username here... "></input>
            <button id="saveFriend">Save Friend</button>
        </div>
        `

    } else if (friendElement.childNodes.length > 8) {
        const friendFormElement = document.querySelector(".addFriend__form")
        friendFormElement.parentNode.removeChild(friendFormElement)
    }
})


// Dispatches userId from input form
eventHub.addEventListener("click", saveClick => {
    if (saveClick.target.id === "saveFriend") {
        // debugger
        let friendToSave = document.querySelector("#addFriend__text").value
        const saveEvent = new CustomEvent("addSavedFriend", {
            detail: {
                friendUsername: friendToSave
            }
        })
        eventHub.dispatchEvent(saveEvent)
    }
})