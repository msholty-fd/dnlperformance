import _ from 'lodash';

export default class HomeController {
    constructor() {
        this.availableYears = _.range(1995, 2017).reverse();
        // this.availableYears = [{
        //     year: 2016
        // }, {
        //     year: 2015
        // }, {
        //     year: 2014
        // }];
        this.selectedYear = this.availableYears[0];
    }
}
