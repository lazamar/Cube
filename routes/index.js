const env = require('../env');
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

// Use Handlebars
app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: 'admin' }));
app.set('view engine', '.hbs');

// Routes
app.use(express.static('public'));
app.get('/', require('./views/index'));

// Start server
app.listen(env.port, () => console.log('Listening on port', env.port));
