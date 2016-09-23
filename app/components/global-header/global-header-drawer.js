import angular from 'angular';
import template from './global-header-drawer.html';

import controller from './global-header-controller.js';

export default angular.module('roulette.components.global-header-drawer', [])

.component('globalHeaderDrawer', {
    controllerAs: 'globalHeaderDrawer',
    controller,
    template
});
