/* The addMessage function is called by the event listener on MessageForm with an object
passed as argument. A fetch/POST takes place, then dispatchStateChange? */

/* Does this page also need a state change dispatch function? Somehow the new message needs to be rendered. 
Surely all of the messages don't have to be rendered again? Is there a way to call render
with only a single message passed through? Maybe just send the one message through as an array
of one and use +=? */