'use strict';

angular
    .module('subaruApp')
    .directive('map', function() {
        return {
            restrict: 'E',
            controllerAs: 'map',
            controller: MapController,
            templateUrl: 'scripts/directives/map/map.html'
        };
    });


function MapController() {

}
