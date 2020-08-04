const dfMessenger = document.querySelector('df-messenger');
var marginsize = '520px'

dfMessenger.addEventListener('dfMessengerLoaded', function (event) {
	window.console.log(dfMessenger.style.display)
	// dfMessenger.shadowRoot.querySelector('.df-messenger-wrapper').setAttribute('style', 'margin-right: ' + marginsize);
	// dfMessenger.shadowRoot.querySelector('message-list-wrapper minimized').setAttribute('style', 'margin-right: ' + marginsize);
  	// dfMessenger.shadowRoot.querySelector('df-messenger-chat').shadowRoot.querySelector('.chat-wrapper').setAttribute('style', 'margin-right: ' + marginsize);

});

// if (dfMessenger.style.display !== 'none') {
// 	window.console.log("??")
// 	window.console.log(dfMessenger.style.display)
// }

const inputBox = document.querySelector('.input-box-wrapper')
window.console.log("input box render test", inputBox)
// dfMessenger.addEventListener('df-response-received', function (event) {
//   	dfMessenger.shadowRoot.querySelector('.df-messenger-wrapper').setAttribute('style', 'margin-right: ' + marginsize);
//   	dfMessenger.shadowRoot.querySelector('df-messenger-chat').shadowRoot.querySelector('.chat-wrapper').setAttribute('style', 'margin-right: ' + marginsize);	
// });
