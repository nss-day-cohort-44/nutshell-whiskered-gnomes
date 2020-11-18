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


// EXAMPLE:  `http://localhost:8088/events?${allFriendsURL()}`  =  user=1&&user=2&&user=3... ect.
// FIRST stores all relevant data.
// SECOND filters all relationships pertaining to the current active user.
// THIRD initialises an array with the current user's id as the first object in said array.
// FOURTH pushes all followee Id's into said array.
// FIFTH adds 'user=' before every object and stores into a new array.
// SIXTH joins all objects in the new array with "&&" and converts new array into a single string.
export const allFriendsURL = () => {
    getFriends()
        .then(() => {
            debugger
            const userId = parseInt(sessionStorage.getItem("activeUser"))
            const allRelationships = useFriends()
            const userRelationships = allRelationships.filter(relationship => relationship.userId === userId)
            let allIds = [userId]
            userRelationships.map(relationship => {
                allIds.push(relationship.followeeId)
            })
            const url = allIds.map(id => `user=${id}`)
            const friendsUrl = url.join(`&&`)
            console.log(friendsUrl)
            return friendsUrl
        })

}

// Gets All relationships
export const getFriends = () => {
    return fetch("http://localhost:8088/friends")
        .then(taco => taco.json())
        .then(taco => friends = taco)

}


// Posts a new relationship
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