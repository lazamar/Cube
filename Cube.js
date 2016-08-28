const Cube = {};
const env = require('./env');

// initialise routes
require('./routes');

// Initialise database
const database = require('./database');
Cube.db = database.getDatabase(env.database);

module.exports = Cube;
