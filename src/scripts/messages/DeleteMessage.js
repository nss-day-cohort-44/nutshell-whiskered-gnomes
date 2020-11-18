/* deleteMessage will take the id of the message to be deleted and make a fetch/DELETE
call to the api. Then call MessageList? Or dispatch a state change event? Does the whole 
list of messages have to be fetched and rendered again? */


/* An event listener will listen for the custom event, get the detail, and call deleteMessage
using the id sent in the detail as argument */