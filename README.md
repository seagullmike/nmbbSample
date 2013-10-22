<h1>Building Node Applications with MongoDB and Backbone</h1>
<h2>Cloud Hosting Mongo with MongoHQ</h2>
<p>This is the example source code from Chapter 10 accompanying O'Reilly's
    "Building Node Applications with MongoDB and Backbone" by Mike Wilson.</p>
<p>fixed up a few typos and case errors. The Cloud9 IDE is strict with respect to
module names... minor edits to run in the Cloud9 IDE were required.  Although this 
example SocialNet app has a simple UI on the client it is still full featured and 
showcasese a full functioning NodeJS based server with MongoDB data store, REST api
and Socket.io real-time client/server api.
</p>
<h2>Requirements</h2>
<p>In order to compile the examples found here, you'll need to have the following
    prerequisites:</p>
<p>Cloud9 IDE (Sign up for a free account)</p>
<dl>
    <dt>
        <strong>CLOUD9 IDE</strong>
    </dt>
    <dd>Set Node.js to 0.8.x</dd>
    <dt>
        <strong>MongoDB via MongoHQ</strong>
        <p>Create a FREE-MongoHQ account and you can host Mongo in the cloud</p>
    </dt>
    <dd>Cloud hosted from MongoHQ</dd>
    <dt>
        <strong>NPM</strong>
    </dt>
    <dd>NPM Install (see package.json)</dd>
    <dt>
        <strong>Bower</strong>
    </dt>
    <dd>Bower Install (see .bowerrc and component.json)
        <p>bower will refresh/update components to the public/components folder</p>
    </dd>
</dl>
<p>Just Clone and Go!  Feel free to use my 'free' cloud hosted mongoDB database for your inital testing purposes.  
Checkout MongoHQ to create your own free account as you become more accustomed to using this stack.
</p>
<p>My recent project updates are mainly to refresh the development stack.  Updates to the server: Node.js, Express, socket.io etc.  
Also, there has been updates to the source code to support Backbone v1.0 (collection.fetch({reset:true}) and usage of .listenTo in Backbone views</p>
I also added Bootstrap to the project and applied limited styling changes to improve the User Interface...  much more could be done wrt the chat UI.  
It shouldn't be fixed, perhaps some type of slider UI to better support the chatting.

***Good luck on your open source journey!***

SERIOUSLY!  You should try [Cloud9 IDE](https://c9.io) and Google Chrome Extension [Cloud 9 Button for Github](https://chrome.google.com/webstore/detail/gkddhhofgajgmgfebhaiihlahjmjkmph) one click to clone/edit any github repo.  Fantastic!



