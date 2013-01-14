define(['SocialNetView', 'text!templates/register.html'], function(SocialNetView, registerTemplate) {
    var registerView = SocialNetView.extend({
        requireLogin: false,

        el: $('#content'),

        events: {
            "submit form": "register"
        },

        register: function() {
            $.post('/register', {
                firstName: $('input[name=firstName]').val(),
                lastName: $('input[name=lastName]').val(),
                email: $('input[name=email]').val(),
                password: $('input[name=password]').val(),
            }).done(function(data) {
                console.log('register:success');
                window.location.hash = 'login';
            }).fail(function(data) {
                console.log('register:failcode: '+data);
            });
            return false;
        },

        render: function() {
            this.$el.html(registerTemplate);
        }
    });

    return registerView;
});
