import config from '../config';

import cors from 'cors';

import gulp from 'gulp';

import connect from 'gulp-connect';

gulp.task('connect', function() {
	connect.server({
		root: [config.build],
		port: 9000,
		livereload: {
			port: config.LIVERELOAD_PORT
		},
		https: true,
		middleware: () => {
			return [cors()];
		}
	});
});
