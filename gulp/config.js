const config = {};

config.UI_S3_URL = '//s3.amazonaws.com/';
config.UI_CLOUDFRONT_URL = '//dt80l7nkb7hnz.cloudfront.net/';
config.STYLEGUIDE_VERSION = '5.2.1';
config.STYLEGUIDE_TEST_URL = '//d19uw7vtmf504j.cloudfront.net/';
config.STYLEGUIDE_CLOUDFRONT_URL = '//d2avoc1xjbdrch.cloudfront.net/';
config.STYLEGUIDE_BASE = getStyleguideBase();
config.STYLEGUIDE_LOCAL_PORT = 9001;

config.LIVERELOAD_PORT = 35727;
config.LIVERELOAD_URL = `https://localhost:${config.LIVERELOAD_PORT}/livereload.js?snipver=1`;

config.app = './app';
config.build = './build';

config.src = {
	html: [
		'./app/**/*.html'
	],
	js: [
		'./app/**/*.js'
	],
	sass: [
		'./app/**/*.scss'
	],
	assets: [
		'./app/index.html',
		'./app/assets/**/*'
	]
};

function getStyleguideBase() {
	if (process.env.STYLEGUIDE_BRANCH && !process.env.PRODUCTION) {
		return `${config.STYLEGUIDE_TEST_URL}${process.env.STYLEGUIDE_BRANCH}/`;
	}

	return `${config.STYLEGUIDE_CLOUDFRONT_URL}${config.STYLEGUIDE_VERSION}/`;
}

export default config;
