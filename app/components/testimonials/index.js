import angular from 'angular';
import template from './testimonials.html';
import TestimonialsController from './testimonials-controller';

export default angular.module('dnl.components.testimonials', [])

.component('testimonials', {
    controllerAs: 'testimonials',
    controller: TestimonialsController,
    template
});
