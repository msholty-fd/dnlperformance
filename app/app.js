import angular from 'angular';

import 'angular-ui-router';
import './components';
import './home';

angular.module('dnl', [
    'dnl.components',
    'dnl.home',
    'ui.router'
])
.config(/* @ngInject */function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
});
