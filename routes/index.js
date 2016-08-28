const env = require('../env');
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const swag = require('swag');

// Use Handlebars
app.engine('.hbs', exphbs({
	extname: '.hbs',
	defaultLayout: 'admin',
	helpers: swag.helpers,
	layoutsDir: 'templates/layouts',
	partialsDir: 'templates/partials',
}));
app.set('view engine', '.hbs');
app.set('views', 'templates');

const middleware = require('./middleware');
app.use(middleware);

// Routes
app.use(express.static('public'));
app.get('/', require('./views/index'));
app.get('/database', require('./views/database'));

// Start server
app.listen(env.port, () => console.log('Listening on port', env.port));
