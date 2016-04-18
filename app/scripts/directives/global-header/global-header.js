'use strict';

angular
    .module('subaruApp')
    .directive('globalHeader', function() {
        return {
            restrict: 'E',
            controllerAs: 'globalHeader',
            controller: GlobalHeaderController,
            templateUrl: 'scripts/directives/global-header/global-header.html'
        };
    });


function GlobalHeaderController() {
    this.menuItems = [{
        title: 'About',
        link: '/about'
    },{
        title: 'Contact',
        link: '/contact'
    }]
}
