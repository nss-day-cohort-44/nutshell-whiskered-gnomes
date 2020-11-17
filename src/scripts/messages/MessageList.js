// import messageHTML, getMessages, useMessages

// define eventHub and contentTarget

// should the variables needed be modular in scope?

/* MessageList will call getMessages, useMessages, and render.
Should I limit the number of messages that come back in the array?
Is this where they should be sorted by timestamp? */

/* render will define an empty string to hold html reps, 
iterate through messages array and call messageHTML for each message obj,
then append the html reps to the dom in ascending order. 
Is this where ascending order should be implemented? */

/* add event listener to listen for message dp state change event for when a message is 
added or deleted? Does the whole list really need to re-render each time a message is added?
Or deleted? */

/* add event listener to listen to delete message click and pass a detail of the id
of the message to delete? */





