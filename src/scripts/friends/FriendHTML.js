
// Heath Lester
// Provides HTML for another user to appear in the Friends List.


export const friendHTML = friend => {
    return `
        <div class="friend__card" id=${friend.id}>
            <p class="friend__username">${friend.username}</p>
            <div class="friend__buttons">
            <button id="delete--${friend.id}">Remove</button>
            </div>
        </div>
    `
}