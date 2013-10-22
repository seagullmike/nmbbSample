define(['SocialNetView', 'models/Contact', 'views/contact', 'text!templates/addcontact.html'],

function(SocialNetView, Contact, ContactView, addcontactTemplate) {
    var addcontactView = SocialNetView.extend({
        el: $('#content'),

        events: {
            "submit form": "search"
        },

        search: function() {
            var view = this;
            // promise
            var postFind = $.post('/contacts/find',this.$('form').serialize());
            
            postFind.done(function(data) {
                //console.log(data);
                view.render(data);
            });
            
            postFind.fail(function() {
                $("#results").text('No contacts found.');
                $("#results").slideDown();
            });
            return false;
        },

        // collectionview
        render: function(resultList) {
            //var view = this;
            this.$el.html(_.template(addcontactTemplate));
            if (null !== resultList) {
                _.each(resultList, function(contactJson) {
                    //console.log(contactJson);

                    var contactModel = new Contact(contactJson);
                    //console.dir(contactModel);

                    var contactHtml = (new ContactView({
                        addButton: true,
                        model: contactModel
                    })).render().el;
                    $('#results').append(contactHtml);
                });
            }
        }
    });

    return addcontactView;
});
