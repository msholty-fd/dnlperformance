import angular from 'angular';
import template from './global-footer.html';
import GlobalFooterController from './global-footer-controller';

export default angular.module('components.global-footer', [])

.directive('subaru.components.globalFooter', function() {
    return {
        restrict: 'E',
        controllerAs: 'globalFooter',
        controller: GlobalFooterController,
        template
    };
});
