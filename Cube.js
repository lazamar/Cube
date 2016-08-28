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
	// database.getCollection('test')
	// .then(col => {
	// 	database.insert(col, { fields: [
	// 		{ label: 'Name', value: 'Marcelo', type: 'text' }
	// 	]})
	// })
});

// initialise routes
require('./routes');

module.exports = Cube;
