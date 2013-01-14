require.config({
    paths: {
        jQuery: '/components/jquery/jquery',
        Underscore: '/components/underscore/underscore',
        Backbone: '/components/backbone/backbone',
        Sockets: '/socket.io/socket.io',
        models: 'models',
        text: '/components/text/text',
        templates: '../templates' //, 
        //SocialNetView: '/js/SocialNetView'
    },

    shim: {
        'Backbone': ['Underscore', 'jQuery'],
        'SocialNet': ['Backbone']
    }
});

require(['SocialNet'], function(SocialNet) {
    SocialNet.initialize();
});
