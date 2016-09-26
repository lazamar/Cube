module.exports = (req, res) => {
	const locals = res.locals;
	locals.title = 'Finances - entries';
	res.render('finances-entries');
};
