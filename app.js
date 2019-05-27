var mongo = require('mongodb');
var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
var routes = require('./routes');

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
