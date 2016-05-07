import angular from 'angular';
import globalFooter from './global-footer';
import globalHeader from './global-header';

const componentsModule = angular.module('dnl.components', [
    globalFooter.name,
    globalHeader.name
]);

export default componentsModule;
