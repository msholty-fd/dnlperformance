import angular from 'angular';
import 'angular-ui-router';

import '../components/appointment-scheduler';

import HomeController from './home-controller';
import template from './home.html';

import HomeCarouselController from './home-carousel-controller';
import homeCarouselTemplate from './home-carousel.html';

export default angular.module('dnl.home', [
    'ui.router',
    'dnl.components.appointment-scheduler',
    'dnl.components.testimonials'
])

.component('homeCarousel', {
    controller: HomeCarouselController,
    controllerAs: 'homeCarousel',
    template: homeCarouselTemplate
})

.config(function($urlRouterProvider, $stateProvider) {
    'ngInject';
    $urlRouterProvider.when('', '/');

    $stateProvider
        .state('home', {
            url: '/',
            controllerAs: 'home',
            controller: HomeController,
            template
        });
});
