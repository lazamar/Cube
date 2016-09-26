module.exports = (req, res) => {
	const locals = res.locals;
	locals.title = 'Finances - expenses';
	res.render('finances-expenses');
};
