
// Heath Lester
// Provides HTML for another user to appear in the Friends List.


export const friendHTML = friendObj => {
    return `
        <div class="friend__card" id=${friendObj.id}>
            <p class="friend__username">${friendObj.username}</p>
            <div class="friend__buttons">
            <button id="delete--${friendObj.id}">Remove</button>
            </div>
        </div>
    `
}