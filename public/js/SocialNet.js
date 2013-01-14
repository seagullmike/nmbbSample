define(['router', 'SocialNetSockets'], function(router, socket) {
    var initialize = function() {
        socket.initialize(router.socketEvents);
        checkLogin(runApplication);
    };

    var checkLogin = function(callback) {
        $.get('/account/authenticated').done(function(data) {
            router.socketEvents.trigger('app:loggedin', data);
            return callback(true);
        }).fail(function() {
            return callback(false);
        });
    };

    var runApplication = function(authenticated) {
        Backbone.history.start();
        if (authenticated) {
            
            Backbone.history.navigate('index', true);
            //window.location.hash = 'index';
        }
        else {
            Backbone.history.navigate('login', true);
            //window.location.hash = 'login';
        }
    };
    return {
        initialize: initialize
    };
});
