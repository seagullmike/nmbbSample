require.config({
    paths: {
        jQuery: '/bower_components/jquery/jquery',
        Underscore: '/bower_components/underscore/underscore',
        Backbone: '/bower_components/backbone/backbone',
        Sockets: '/socket.io/socket.io',
        models: 'models',
        text: '/bower_components/requirejs.text/text',
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