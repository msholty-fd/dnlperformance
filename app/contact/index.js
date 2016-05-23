import angular from 'angular';
import 'angular-sanitize';
import 'angular-ui-router';

import '../components/google-api';

import ContactController from './contact-controller';
import template from './contact.html';

export default angular.module('dnl.contact', [
    'ui.router',
    'dnl.components.google-api',
    'ngSanitize'
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
