// Heath Lester
// Allows the getting, adding, and deleting of information to the /friends endpoint

const eventHub = document.querySelector(".container")

// Change event that tells DOM when to re-render
// const friendChangeEvent = () => {
//     const friendStateChangeEvent = new CustomEvent("friendsChanged")
//     eventHub.dispatchEvent(friendStateChangeEvent)
// }


let friends = []


export const useFriends = () => friends.slice()


// Gets All relationships
export const getFriends = () => {
    return fetch("http://localhost:8088/friends")
        .then(taco => taco.json())
        .then(taco => friends = taco)

}


// Post a new relationship
export const addFriend = realtionshipObj => {
    return fetch("http://localhost:8088/friends", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(realtionshipObj)
    })
        // .then(getFriends)
        // .then(friendChangeEvent)
}


// Deletes an undesired relationship
export const deleteFriend = relationship => {
    return fetch(`http://localhost:8088/friends/${relationship.id}`, {
        method: "DELETE"
    })
        // .then(getFriends)
        // .then(friendChangeEvent)
}