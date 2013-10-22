define(['Sockets', 'models/ContactCollection', 'views/chat'],

function(sio, ContactCollection, ChatView) {
    var SocialNetSockets = function(eventDispatcher) {
        var accountId = null;
        var socket = null;

        var connectSocket = function(socketAccountId) {
            accountId = socketAccountId;
            console.log('SocialNetSockets: ' + socketAccountId);
            socket = sio.connect();

            socket.on('connect_failed', function(reason) {
                console.error('unable to connect', reason);
            });

            socket.on('connect', function() {
                console.log('socket.io:connect--from client');
                eventDispatcher.bind('socket:chat', sendChat);
                socket.on('chatserver', function(data) {
                    eventDispatcher.trigger('socket:chat:start:' + data.from);
                    eventDispatcher.trigger('socket:chat:in:' + data.from, data);
                });

                socket.on('contactEvent', handleContactEvent);

                var myContacts = new ContactCollection();
                myContacts.url = '/accounts/me/contacts';
                new ChatView({
                    collection: myContacts,
                    socketEvents: eventDispatcher
                }).render();
                myContacts.fetch({reset:true});
            });
        };

        var handleContactEvent = function(eventObj) {
            var eventName = eventObj.action + ':' + eventObj.from;
            eventDispatcher.trigger(eventName, eventObj);

            if (eventObj.from == accountId) {
                eventName = eventObj.action + ':me';
                eventDispatcher.trigger(eventName, eventObj);
            }
        };

        var sendChat = function(payload) {
            if (null !== socket) {
                socket.emit('chatclient', payload);
            }
        };

        eventDispatcher.bind('app:loggedin', connectSocket);
    };

    return {
        initialize: function(eventDispatcher) {
            SocialNetSockets(eventDispatcher);
        }
    };
});
