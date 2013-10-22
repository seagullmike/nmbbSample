require.config({
    paths: {
        jQuery: '/bower_components/jquery/jquery',
        Underscore: '/bower_components/underscore/underscore',
        Backbone: '/bower_components/backbone/backbone',
        Sockets: '/socket.io/socket.io',
        models: 'models',
        text: '/bower_components/requirejs.text/text',
        //SocialNetView: '/js/SocialNetView'
        bootstrap: '/components/bootstrap/docs/assets/js/bootstrap.min',
        templates: '../templates'
    },
    
    shim: {
        'Backbone': ['Underscore', 'jQuery'],
        'SocialNet': ['Backbone'],
        'bootstrap' : ['jQuery']
    }
});

require(['SocialNet', 'bootstrap' ], function(SocialNet) {    
    SocialNet.initialize();
});
