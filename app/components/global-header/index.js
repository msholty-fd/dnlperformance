import angular from 'angular';
import template from './global-header.html';
import GlobalHeaderController from './global-header-controller';

import globalHeaderDrawerModule from './global-header-drawer.js';

export default angular.module('dnl.components.global-header', [
    globalHeaderDrawerModule.name
])

.component('globalHeader', {
    controllerAs: 'globalHeader',
    controller: GlobalHeaderController,
    template
});
