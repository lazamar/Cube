// List all available tasks
const organiser = require('gulp-organiser');
organiser.registerAll('./tasks', {
	'sass': {
		'src': './public_src/styles/**/*.scss',
		'dest': './public/styles/'
	},
	'copy-static': {
		'src': './public_src/**/*.*',
		'dest': './public',
		'map': {
		}
	},
  'browser-sync': {
    src: '.', // it doesn't matter, it's just so the task object is not ignored.
    reloadOn: ['sass'],
    config: {
      // Using with an existing server
      proxy: "localhost:3000",
    }
  },
  'run-server': {
    src: 'Cube.js',
  }
});
