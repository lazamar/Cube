// Allow require without loads of '../../../'
global.rootRequire = (name) => {
	return require(`${__dirname}/${name}`); // eslint-disable-line global-require
};

const Cube = {};
const env = require('./env');

// Initialise database
const database = require('./database');
Cube.database = database;
database.getDatabase(env.database).then(db => {
	Cube.db = db;
});

// initialise routes
require('./routes');

module.exports = Cube;
