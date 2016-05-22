import angular from 'angular';
import ContactController from './contact-controller';
import template from './contact.html';
import 'angular-ui-router';

export default angular.module('dnl.contact', [
    'ui.router'
])

.config(function($stateProvider) {
    'ngInject';
    $stateProvider
        .state('contact', {
            url: '/contact',
            controller: ContactController,
            controllerAs: 'contact',
            template
        });
});
