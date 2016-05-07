import angular from 'angular';
import template from './global-header.html';
import GlobalHeaderController from './global-header-controller';

export default angular.module('components.global-header', [])

.directive('subaru.components.globalHeader', function() {
    return {
        restrict: 'E',
        controllerAs: 'globalheader',
        controller: GlobalHeaderController,
        template
    };
});
