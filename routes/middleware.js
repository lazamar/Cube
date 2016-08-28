module.exports = (req, res, next) => {
  const locals = res.locals;

	locals.navbar = [
		{ label: 'Home', href: '/' },
		{ label: 'Database', href: '/database' },
	];

  next();
};
