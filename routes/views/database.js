module.exports = (req, res) => {
	const Cube = rootRequire('Cube'); // eslint-disable-line global-require

	const locals = res.locals;
	locals.title = 'Database';

	let collectionNames;
	let collections;
	Cube.database.listCollections(Cube.db)
	.then(colNames => {
		collectionNames = colNames.map(c => c.name);
		return Promise.all(collectionNames.map(n => Cube.database.getCollection(Cube.db, n)));
	})
	.then(cols => {
		collections = cols;
		return Promise.all(collections.map(col => Cube.database.findAll(col)));
	})
	.then(records => {
		return collections.map((col, idx) => {
			return { title: collectionNames[idx], records: records[idx] };
		});
	})
	.then(databases => {
		res.render('database', { databases });
	})
	.catch(err => {
		res.render('500', err);
		console.log(err);
	});
};
