import angular from 'angular';
import template from './global-footer.html';
import GlobalFooterController from './global-footer-controller';

export default angular.module('dnl.components.global-footer', [])

.component('globalFooter', {
    controllerAs: 'globalFooter',
    controller: GlobalFooterController,
    template
});
