import _ from 'lodash';

export default class ContactController {
    constructor() {
        this.availableYears = _.range(1995, 2017).reverse();
    }
}
