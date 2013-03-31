define(['views/index', 'views/register', 'views/login', 'views/forgotpassword', 'views/profile', 'views/contacts', 'views/addcontact', 'models/Account', 'models/StatusCollection', 'models/ContactCollection'],

function(IndexView, RegisterView, LoginView, ForgotPasswordView, ProfileView,
ContactsView, AddContactView, Account, StatusCollection,
ContactCollection) {
    var SocialRouter = Backbone.Router.extend({
        currentView: null,

        socketEvents: _.extend({}, Backbone.Events),

        routes: {
            'addcontact': 'addcontact',
            'index': 'index',
            'login': 'login',
            'register': 'register',
            'forgotpassword': 'forgotpassword',
            'profile/:id': 'profile',
            'contacts/:id': 'contacts'
        },

        changeView: function(view) {
            if (null !== this.currentView) {
                this.currentView.undelegateEvents();
            }
            this.currentView = view;
            this.currentView.render();
        },

        index: function() {
            var statusCollection = new StatusCollection();
            statusCollection.url = '/accounts/me/activity';
            this.changeView(new IndexView({
                collection: statusCollection,
                socketEvents: this.socketEvents
            }));
            statusCollection.fetch({reset:true});
        },

        addcontact: function() {
            this.changeView(new AddContactView());
        },

        login: function() {
            this.changeView(new LoginView({
                socketEvents: this.socketEvents
            }));
        },

        forgotpassword: function() {
            this.changeView(new ForgotPasswordView());
        },

        register: function() {
            this.changeView(new RegisterView());
        },

        profile: function(id) {
            var model = new Account({
                id: id
            });
            this.changeView(new ProfileView({
                model: model,
                socketEvents: this.socketEvents
            }));
            model.fetch();
        },

        contacts: function(id) {
            //console.log(id + ' contacts route');
            var contactId = id ? id : 'me';
            var contactCollection = new ContactCollection();
            contactCollection.url = '/accounts/' + contactId + '/contacts';
            //console.log(contactCollection.url);
            this.changeView(new ContactsView({
                collection: contactCollection
            }));
            contactCollection.fetch({reset:true});
        }
    });

    return new SocialRouter();
});
