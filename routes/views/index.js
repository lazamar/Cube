module.exports = (req, res) => {
	const locals = res.locals;
	locals.title = 'Home';
	res.render('index');
};
