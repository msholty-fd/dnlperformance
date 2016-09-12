import angular from 'angular';

import 'angular-ui-router';

import './components';
import './home';
import './contact';
import ServicesModule from './services';
import aboutModule from './about';

import NotFoundTemplate from './404.html';

angular.module('dnl', [
    'dnl.components',
    'dnl.home',
    'dnl.contact',
    ServicesModule.name,
    aboutModule.name,
    'ui.router'
])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('404', {
        template: NotFoundTemplate
    });

    $urlRouterProvider.otherwise(function($injector, $location) {
        $injector.get('$state').go('404');
        return $location.path();
    });
})

.config(function($locationProvider) {
    $locationProvider.html5Mode(true);
})

.run(function($rootScope, $state) {
    'ngInject';

    $rootScope.$on('$stateChangeSuccess', function() {
        $rootScope.currentStateName = $state.current.name;
    });
});
