'use strict';

angular
    .module('subaruApp')
    .directive('globalFooter', function() {
        return {
            restrict: 'E',
            controllerAs: 'globalFooter',
            controller: GlobalFooterController,
            templateUrl: 'scripts/directives/global-footer/global-footer.html'
        };
    });


function GlobalFooterController() {

}
