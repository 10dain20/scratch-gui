const dfMessenger = document.querySelector('df-messenger');
// var marginsize = '520px'
window.console.log(dfMessenger);

dfMessenger.addEventListener('df-request-sent', function (event) {
	// document.removeEventListener('keydown');
	// document.removeEventListener('keyup');
	// console.log("event listener removed")
	// window.console.log(dfMessenger.style.display)

	const box = dfMessenger.shadowRoot.querySelector('df-messenger-chat').shadowRoot.querySelector('df-messenger-user-input').shadowRoot.querySelector('.input-box-wrapper').querySelector('input')
	window.console.log(box + " is loadeded");
	function dialogDelete(e) {
		if (e.keyCode == 8){
			box.value = box.value.substring(0, box.value.length - 1);
		}
	}
	box.removeEventListener('keydown', dialogDelete);
	box.addEventListener('keydown', dialogDelete);
	//wrapper.removeEventListener('keydown', 
	//dfMessenger.shadowRoot.querySelector('.df-messenger-wrapper').setAttribute('style', 'margin-right: ' + marginsize);
	//dfMessenger.shadowRoot.querySelector('message-list-wrapper minimized').setAttribute('style', 'margin-right: ' + marginsize);
	//dfMessenger.shadowRoot.querySelector('df-messenger-chat').shadowRoot.querySelector('df-messenger-user-input').shadowRoot.querySelector('.input-box-wrapper')
	//window.console.log(dfMessenger.shadowRoot.querySelector('df-messenger-chat').shadowRoot.querySelector('df-messenger-user-input').shadowRoot.querySelector('.input-box-wrapper'))

});


// dfMessenger.addEventListener('df-response-received', function (event) {
//   	dfMessenger.shadowRoot.querySelector('.df-messenger-wrapper').setAttribute('style', 'margin-right: ' + marginsize);
//   	dfMessenger.shadowRoot.querySelector('df-messenger-chat').shadowRoot.querySelector('.chat-wrapper').setAttribute('style', 'margin-right: ' + marginsize);	
// });
