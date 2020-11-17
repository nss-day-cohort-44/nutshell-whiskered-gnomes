// Heath Lester
// Provides at function that renders a form to add friends to the /friends endpoint.


const eventHub = document.querySelector(".container")
const friendElement = document.querySelector(".friends")
const friendFormElement = document.querySelector(".addFriend__form")

eventHub.addEventListener("add_Friend", () => {
    console.log(friendElement.childNodes.length)
    debugger
    if (friendElement.childNodes.length < 4 ) {
        friendElement.innerHTML += `
        <div class="addFriend__form">
            <input type="text" id="addFriend--text" placeholder="Enter username here... "></input>
            <button id="saveFriend">Save Friend</button>
        </div>
        `

    } else if (friendElement.childNodes.length > 3){
        friendElement.parentNode.removeChild(friendFormElement) 
    }
})

