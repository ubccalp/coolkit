var mongo = require('mongodb');
var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
var routes = require('./routes');
const bodyParser= require('body-parser')

var db

const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
const uri = "mongodb+srv://tiffany:tiff123@icoolkit-jbjkz.mongodb.net/test?retryWrites=true&w=majority"
MongoClient.connect(uri,{ useUnifiedTopology: true }, function(err, client) {
  // perform actions on the collection object
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   db = client.db("coolkit");
   console.log('Connected...');
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

app.use(bodyParser.urlencoded({extended: true}))

module.exports = app;


app.get('/', function(req, res) {
    var collection = req.db.get('quotes');
    collection.find({}, {}, function(err, docs) {
        var obj = {
          fromDB: docs,
          title: "This is a title of the page"
        }
        res.render('userlist', obj);
    });
});


app.post('/addquote', function(req, res) {
    var quote = req.body.quote;
    var collection = req.db.get('quotes');
    collection.insert({"quote": quote}, function (err, doc) {
        if (err) {
            res.send("There was a problem adding the information to the database.");
        }
        else {
            res.redirect("/userlist"); // works with or without preceding slash
        }
    });
});
app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.hbs', {quotes: result})
  })
})


app.post('/quotes', (req, res) => {
  db.collection('quotes').insertOne(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})

// app.get('/step-5/a1', (req, res) => {
//   db.collection('pledges').find().toArray((err, result) => {
//     if (err) return console.log(err)
//     // renders index.ejs
//     res.render('step-5-activity-1', {pledges: result})
//   })
// })
