// Heath Lester
// Allows the getting, adding, and deleting of information to the /friends endpoint

const eventHub = document.querySelector(".container")

// Change event that tells DOM when to re-render
const friendChangeEvent = () => {
    const friendStateChangeEvent = new CustomEvent("friendsChanged")
    eventHub.dispatchEvent(friendStateChangeEvent)
}


let friends = []


export const useFriends = () => friends.slice()


export const getFriends = () => {
    return fetch("http://localhost:8088/friends")
        .then(taco => taco.json())
        .then(taco => friends = taco)

}

export const addFriend = friendId => {
    return fetch("http://localhost:8088/friends", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(friendId)
    })
        .then(getFriends)
        .then(friendChangeEvent)
}

export const deleteFriend = relationship => {
    return fetch(`http://localhost:8088/friends/friends/${relationship.id}`, {
        method: "DELETE"
    })
        .then(getFriends)
        .then(friendChangeEvent)
}