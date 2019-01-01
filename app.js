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

app.get('/step-1', (req, res) => {
    res.render('step-1-activity-homepage', { title: 'Step 1: Start A Conversation' });
});

app.get('/step-2', (req, res) => {
    res.render('step-2-activity-homepage', { title: 'Step 2: Map Your Block' });
});

app.get('/step-3', (req, res) => {
    res.render('step-3-activity-homepage', { title: 'Step 3: Rate Your Block' });
});

app.get('/step-4', (req, res) => {
    res.render('step-4-activity-homepage', { title: 'Step 4: Visioning Your Future' });
});

app.get('/step-5', (req, res) => {
    res.render('step-5-activity-homepage', { title: 'Step 5: Action On The Ground' });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});