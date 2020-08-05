const dfMessenger = document.querySelector('df-messenger');
var marginsize = '520px'

dfMessenger.addEventListener('mousemove', function (event) {
	// document.removeEventListener('keydown');
	// document.removeEventListener('keyup');
	// console.log("event listener removed")
	// window.console.log(dfMessenger.style.display)

	const wrapper = document.querySelector('df-messenger').shadowRoot.querySelector('df-messenger-chat').shadowRoot.querySelector('df-messenger-user-input').shadowRoot.querySelector('.input-box-wrapper')

	wrapper.removeEventListener('keydown', 
	dfMessenger.shadowRoot.querySelector('.df-messenger-wrapper').setAttribute('style', 'margin-right: ' + marginsize);
	dfMessenger.shadowRoot.querySelector('message-list-wrapper minimized').setAttribute('style', 'margin-right: ' + marginsize);
	dfMessenger.shadowRoot.querySelector('df-messenger-chat').shadowRoot.querySelector('df-messenger-user-input').shadowRoot.querySelector('.input-box-wrapper')
	window.console.log(dfMessenger.shadowRoot.querySelector('df-messenger-chat').shadowRoot.querySelector('df-messenger-user-input').shadowRoot.querySelector('.input-box-wrapper'))

});


// dfMessenger.addEventListener('df-response-received', function (event) {
//   	dfMessenger.shadowRoot.querySelector('.df-messenger-wrapper').setAttribute('style', 'margin-right: ' + marginsize);
//   	dfMessenger.shadowRoot.querySelector('df-messenger-chat').shadowRoot.querySelector('.chat-wrapper').setAttribute('style', 'margin-right: ' + marginsize);	
// });
