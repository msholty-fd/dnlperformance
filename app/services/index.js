import angular from 'angular';
import 'angular-ui-router';

import ServicesController from './services-controller';
import template from './services.html';

export default angular.module('dnl.services', [
    'ui.router'
])

.config(function($stateProvider) {
    'ngInject';
    $stateProvider
        .state('services', {
            url: '/services',
            controller: ServicesController,
            controllerAs: 'services',
            template
        });
});
