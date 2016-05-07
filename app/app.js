import angular from 'angular';

import 'angular-ui-router';

export default angular.module('subaru', [
    'subaru.components',
    'subaru.home',
    'ui.router'
])
.config(/* @ngInject */function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            controller: 'HomeCtrl',
            templateUrl: 'scripts/home/home.html'
        });
});
