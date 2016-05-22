import angular from 'angular';

import 'angular-ui-router';

import './components';
import './home';
import './contact';

angular.module('dnl', [
    'dnl.components',
    'dnl.home',
    'dnl.contact',
    'ui.router'
])

.config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
})

.config(function($locationProvider) {
    $locationProvider.html5Mode(true);
});
