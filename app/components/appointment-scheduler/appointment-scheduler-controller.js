import _ from 'lodash';

export default class AppointmentSchedulerController {
    constructor() {
        this.availableYears = _.range(1995, 2017).reverse();
        this.selectedYear = this.availableYears[0];
        this.availableModels = [
            'B9 Tribeca',
            'Forester',
            'Forester 2.5x',
            'Forester 2.5xt',
            'Impreza',
            'Impreza 2.5i',
            'Impreza WRX',
            'Impreza WRX STI',
            'Legacy',
            'Legacy 2.5GT',
            'Legacy 2.5i',
            'Legacy 3.0R',
            'Outback',
            'Outback 2.5i',
            'Outback 2.5xt',
            'Outback 3.0R',
            'Tribeca'
        ];
    }
}
