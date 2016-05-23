import angular from 'angular';
import 'angular-ui-router';

import '../components/appointment-scheduler';
import '../components/testimonials';

import HomeController from './home-controller';
import template from './home.html';

export default angular.module('dnl.home', [
    'ui.router',
    'dnl.components.appointment-scheduler',
    'dnl.components.testimonials'
])

.config( /* @ngInject */ function($urlRouterProvider, $stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            controller: HomeController,
            controllerAs: 'home',
            template
        });
});
