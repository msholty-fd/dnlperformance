import angular from 'angular';
import template from './appointment-scheduler.html';
import AppointmentSchedulerController from './appointment-scheduler-controller';

export default angular.module('dnl.components.appointment-scheduler', [])

.component('appointmentScheduler', {
    controllerAs: 'appointmentScheduler',
    controller: AppointmentSchedulerController,
    template
});
