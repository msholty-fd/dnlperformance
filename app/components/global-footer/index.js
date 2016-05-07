import angular from 'angular';
import template from './global-footer.html';
import GlobalFooterController from './global-footer-controller';

export default angular.module('dnl.components.global-footer', [])

.directive('globalFooter', function() {
    return {
        restrict: 'E',
        controllerAs: 'globalFooter',
        controller: GlobalFooterController,
        template
    };
});
