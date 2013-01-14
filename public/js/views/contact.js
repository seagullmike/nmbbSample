define(['SocialNetView', 'text!templates/contact.html'], function(SocialNetView, contactTemplate) {
    var contactView = SocialNetView.extend({
        addButton: false,
        removeButton: false,
        tagName: 'li',

        events: {
            "click .addbutton": "addContact",
            "click .removebutton": "removeContact"
        },

        addContact: function() {
            var that = this; // callback context
            var $responseArea = this.$('.actionarea');
            // deferred
            var posted = $.post('/accounts/me/contact', {
                contactId: this.model.get('_id')
            });
            posted.done(function() {
                //console.log('addContact->Success');
                $responseArea.text('Contact Added: ' + that.model.get('name').first);
            });
            posted.fail(function() {
                $responseArea.text('Could not add contact');
            });
        },

        removeContact: function() {
            var $responseArea = this.$('.actionarea');
            $responseArea.text('Removing contact...');
            $.ajax({
                url: '/accounts/me/contact',
                type: 'DELETE',
                data: {
                    contactId: this.model.get('accountId')
                }
            }).done(function() {
                $responseArea.text('Contact Removed');
            }).fail(function() {
                $responseArea.text('Could not remove contact');
            });
        },

        initialize: function() {
            // Set the addButton variable in case it has been added in the constructor
            if (this.options.addButton) {
                this.addButton = this.options.addButton;
            }

            if (this.options.removeButton) {
                this.removeButton = this.options.removeButton;
            }
        },

        render: function() {
            $(this.el).html(_.template(contactTemplate, {
                model: this.model.toJSON(),
                addButton: this.addButton,
                removeButton: this.removeButton
            }));
            return this;
        }
    });

    return contactView;
});
