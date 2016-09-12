export default class GlobalHeaderController {
    constructor(DNLGApi) {
        this.showDrawer = false;
        this.menuItems = [{
            state: 'contact',
            title: 'Contact'
        }, {
            state: 'about',
            title: 'About Us'
        }, {
            state: 'services',
            title: 'Maintenance and Services'
        }];

        this.DNLGApi = DNLGApi;

        this.DNLGApi.getPlaceDetails().then((response) => {
            this.placeDetails = response.data.result;
        });
    }
}
