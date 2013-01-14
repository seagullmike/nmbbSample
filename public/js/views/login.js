define(['SocialNetView', 'text!templates/login.html'], function(SocialNetView, loginTemplate) {
    var loginView = SocialNetView.extend({
        requireLogin: false,

        el: $('#content'),

        events: {
            "submit form": "login"
        },

        initialize: function(options) {
            this.socketEvents = options.socketEvents;
        },

        login: function() {
            var socketEvents = this.socketEvents;
            $.post('/login', this.$('form').serialize()).done(function(data) {
                socketEvents.trigger('app:loggedin', data);
                Backbone.history.navigate('index', true)
            }).fail(function() {
                $("#error").text('Unable to login.').slideDown();
            });

            return false; // don't submit this form
        },

        render: function() {
            this.$el.html(loginTemplate);
            $("#error").hide();
            $("input[name=email]").focus();
            return this;
        }
    });

    return loginView;
});
