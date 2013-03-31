require.config({
    paths: {
        jQuery: '/components/jquery/jquery',
        Underscore: '/components/underscore/underscore',
        Backbone: '/components/backbone/backbone',
        Sockets: '/socket.io/socket.io',
        models: 'models',
        text: '/components/requirejs-text/text',
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
