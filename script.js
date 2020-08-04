const dfMessenger = document.querySelector('df-messenger');
var marginsize = '520px'

dfMessenger.addEventListener('dfMessengerLoaded', function (event) {
	// document.removeEventListener('keydown');
	// document.removeEventListener('keyup');
	// console.log("event listener removed")
	// window.console.log(dfMessenger.style.display)
	// dfMessenger.shadowRoot.querySelector('.df-messenger-wrapper').setAttribute('style', 'margin-right: ' + marginsize);
	// dfMessenger.shadowRoot.querySelector('message-list-wrapper minimized').setAttribute('style', 'margin-right: ' + marginsize);
	// dfMessenger.shadowRoot.querySelector('df-messenger-chat').shadowRoot.querySelector('.chat-wrapper').setAttribute('style', 'margin-right: ' + marginsize);
	
});

document.removeEventListener('keydown');
	document.removeEventListener('keyup');
	console.log("event listener removed")

// if (dfMessenger.style.display !== 'none') {
	// 	window.console.log("??")
	// 	window.console.log(dfMessenger.style.display)
	// }
	

// dfMessenger.addEventListener('df-response-received', function (event) {
//   	dfMessenger.shadowRoot.querySelector('.df-messenger-wrapper').setAttribute('style', 'margin-right: ' + marginsize);
//   	dfMessenger.shadowRoot.querySelector('df-messenger-chat').shadowRoot.querySelector('.chat-wrapper').setAttribute('style', 'margin-right: ' + marginsize);	
// });
