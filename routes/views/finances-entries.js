module.exports = (req, res) => {
	const locals = res.locals;
	locals.title = 'Finances - entries';
  const Cube = rootRequire('Cube');

  Cube.database.getCollection(Cube.db, 'entries')
  .then(Cube.database.findAll)
  .then(entries => {
    locals.data = entries;
    res.render('finances-entries');
  })
  .catch(err => {
		res.render('500', err);
		console.log(err);
	});
};
