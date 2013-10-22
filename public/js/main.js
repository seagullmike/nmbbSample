require.config({
    paths: {
        jQuery: '/bower_components/jquery/jquery',
        Underscore: '/bower_components/underscore/underscore',
        Backbone: '/bower_components/backbone/backbone',
        Sockets: '/socket.io/socket.io',
        models: 'models',
<<<<<<< HEAD
        text: '/bower_components/requirejs.text/text',
        templates: '../templates' //, 
        //SocialNetView: '/js/SocialNetView'
=======
        text: '/components/requirejs-text/text',
        bootstrap: '/components/bootstrap/docs/assets/js/bootstrap.min',
        templates: '../templates'
>>>>>>> dc10ae0f782d5718cc50d89ba8f3272ae6fec3ec
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
