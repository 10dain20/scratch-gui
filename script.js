const dfMessenger = document.querySelector('df-messenger');
var marginsize = '520px'

dfMessenger.addEventListener('dfMessengerLoaded', function (event) {
	dfMessenger.shadowRoot.querySelector('.df-messenger-wrapper').setAttribute('style', 'margin-right: ' + marginsize);
	dfMessenger.shadowRoot.querySelector('message-list-wrapper minimized').setAttribute('style', 'margin-right: ' + marginsize);
  	dfMessenger.shadowRoot.querySelector('df-messenger-chat').shadowRoot.querySelector('.chat-wrapper').setAttribute('style', 'margin-right: ' + marginsize);

});

dfMessenger.addEventListener('df-response-received', function (event) {
  	dfMessenger.shadowRoot.querySelector('.df-messenger-wrapper').setAttribute('style', 'margin-right: ' + marginsize);
  	dfMessenger.shadowRoot.querySelector('df-messenger-chat').shadowRoot.querySelector('.chat-wrapper').setAttribute('style', 'margin-right: ' + marginsize);	
});
