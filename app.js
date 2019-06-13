var mongo = require('mongodb');
var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
var routes = require('./routes');



const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
const uri = "mongodb+srv://Coolkit:jDxgrNDb6VLs5sq7@coolkitcluster-pkuje.azure.mongodb.net/test?retryWrites=true&w=majority"
MongoClient.connect(uri, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   const collection = client.db("test").collection("devices");
   // perform actions on the collection object
   client.close();
});




var app = express();

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    helpers: {
        section: function(name, options){
            if(!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        }
    },
    extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(express.static(path.join(__dirname + '/assets')));

app.use('/', routes);

module.exports = app;
