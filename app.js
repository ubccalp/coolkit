var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var mongo = require('mongodb');
var path = require('path');
var routes = require('./routes');



const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
const uri = "mongodb+srv://tiffany:tiff123@icoolkit-jbjkz.mongodb.net/test?retryWrites=true&w=majority"
MongoClient.connect(uri,{  useNewUrlParser: true}, function(err, client) {
  // perform actions on the collection object
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   const collection = client.db("coolkit").collection("web");
   console.log('Connected...');
   client.close();
});



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
