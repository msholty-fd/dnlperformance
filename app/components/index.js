import angular from 'angular';
import globalFooter from './global-footer';
import globalHeader from './global-header';

export default angular.module('dnl.components', [
    globalFooter.name,
    globalHeader.name
]);
