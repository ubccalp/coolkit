var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var exphbs = require('express-handlebars');

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

app.use(express.static(__dirname + '/assets'));

// Home Page
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});