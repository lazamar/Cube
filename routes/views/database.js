module.exports = (req, res) => {
	const locals = res.locals;
	locals.title = 'Database';
	res.render('index');
};
