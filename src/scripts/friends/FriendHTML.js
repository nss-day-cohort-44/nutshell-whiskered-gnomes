
// Heath Lester
// Provides HTML for another user to appear in the Friends List.


const eventHub = document.querySelector(".container")

// Runs and individual user through an HTML formatter
export const friendHTML = friendObj => {
    return `
        <div class="friend__card" id=${friendObj.id}>
            <p class="friend__username">${friendObj.username}</p>
            <div class="friend__buttons">
            <button class="deleteButton" id="deleteFriend--${friendObj.id}">Remove</button>
            </div>
        </div>
    `
}


// Dispatches userId from input form
eventHub.addEventListener("click", deleteClick => {
    if (deleteClick.target.id.startsWith("deleteFriend--")) {
        // debugger
        const [prefix, friendId] = deleteClick.target.id.split("--")
        const deleteEvent = new CustomEvent("deleteFriend", {
            detail: {
                friendId: parseInt(friendId)
            }
        })
        eventHub.dispatchEvent(deleteEvent)
    }
})