export default class HomeController {
    constructor() {
        this.myInterval = 5000;
        this.noWrapSlides = false;
        this.active = 0;
        this.carouselSlides = [{
            id: 1,
            image: 'logo/1.jpg',
            text: 'Your local Gainesville Subaru specialist'
        }, {
            id: 2,
            image: 'logo/2.jpg',
            text: 'Another image'
        }];
    }
}
