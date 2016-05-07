import angular from 'angular';
import HomeController from './home-controller';
import template from './home.html';
import 'angular-ui-router';

export default angular.module('dnl.home', [
    'ui.router'
])

.config( /* @ngInject */ function($urlRouterProvider, $stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            controller: HomeController,
            template
        });
});
