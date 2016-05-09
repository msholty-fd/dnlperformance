import angular from 'angular';
import template from './global-header.html';
import GlobalHeaderController from './global-header-controller';

export default angular.module('dnl.components.global-header', [])

.component('globalHeader', {
    controllerAs: 'globalHeader',
    controller: GlobalHeaderController,
    template
});
