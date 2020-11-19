
// Heath Lester
// Matches deleting friends id to a relationship and deletes if from the /friends endpoint.

import { ArticleListComponent } from "../articles/ArticleList.js"
import { EventList } from "../events/EventList.js"
import { MessageList } from "../messages/MessageList.js"
import { useFriends, deleteFriend, getFriends } from "./FriendsDataProvider.js"
import { friendsList } from "./FriendsList.js"


const eventHub = document.querySelector(".container")

// FIRST stores all relevant information.
// THEN filters through all relationships for all those pertaining to the current user.
// THEN finds the relationship with the 'followeeId' in the newly filtered array.
// THEN removes that relationship from the /friends endpoint via the relationship ID.
// LASTLY re-renders the friendsList().
eventHub.addEventListener("deleteFriend", unwantedFriend => {
    // debugger
    const currentUserId = parseInt(sessionStorage.getItem("activeUser"))
    const allRelationships = useFriends()
    const userRelationships = allRelationships.filter(relationship => relationship.userId === currentUserId)
    const doomedRelationship = userRelationships.find(relationship => relationship.followeeId === unwantedFriend.detail.friendId)
    deleteFriend(doomedRelationship)
        .then(getFriends)
        .then(friendsList)
        .then(MessageList)
        .then(EventList)
        .then(ArticleListComponent)
})