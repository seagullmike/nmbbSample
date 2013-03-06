require.config({
    paths: {
        jQuery: '/components/jquery/jquery',
        Underscore: '/components/underscore/underscore',
        Backbone: '/components/backbone/backbone',
        Sockets: '/socket.io/socket.io',
        models: 'models',
        text: '/components/text/text',
        bootstrap: '/components/bootstrap/docs/assets/js/bootstrap.min',
        templates: '../templates'
        //jqmigrate: '/components/jquery/jquery-migrate'
    },

    shim: {
        'jqmigrate':['jQuery'],
        'Backbone': ['Underscore', 'jQuery'],
        'SocialNet': ['Backbone'],
        'bootstrap' : ['jQuery']
    }
});

require(['SocialNet', 'bootstrap' /*,'jqmigrate'*/], function(SocialNet) {    
    SocialNet.initialize();
});
