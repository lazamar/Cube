module.exports = (req, res) => {
	const locals = res.locals;
	locals.title = 'Finances - statistics';
	res.render('finances-statistics');
};
