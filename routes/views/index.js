module.exports = (req, res) => {
	const locals = res.locals;
	locals.title = 'Yeeha!!';
	res.render('index');
};
