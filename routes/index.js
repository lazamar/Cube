const env = require('../env');
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

// Use Handlebars
app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: 'admin' }));
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
	res.render('start', { title: 'Hey!', message: 'Hello there!' });
});

app.listen(env.port, () => console.log('Listening on port', env.port));
