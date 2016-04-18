'use strict';

/**
 * @ngdoc overview
 * @name subaruApp
 * @description
 * # subaruApp
 *
 * Main module of the application.
 */
angular
    .module('subaruApp', [
        'ngAnimate',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ui.router',
        'ngSanitize',
        'ngTouch'
    ])
    .config(/* @ngInject */function($stateProvider, $urlRouterProvider) {
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise('/state1');
        //
        // Now set up the states
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'views/main.html'
            });
    });
