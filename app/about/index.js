import angular from 'angular';
import 'angular-ui-router';

import '../components/testimonials';

import controller from './about-controller';
import template from './about.html';

export default angular.module('dnl.about-us', [
    'ui.router',
    'dnl.components.appointment-scheduler',
    'dnl.components.testimonials'
])

.config( function($urlRouterProvider, $stateProvider) {
    'ngInject';
    $stateProvider
        .state('about', {
            url: '/about',
            controller,
            controllerAs: 'about',
            template
        });
});
