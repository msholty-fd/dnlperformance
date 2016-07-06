export default class HomeController {
    constructor() {
        this.activeSlideIndex = 0;
        this.slides = [{
            id: 1,
            image: 'logo/3.jpg',
            title: 'Gainesville\'s Premiere Subaru Specialists',
            tagline: 'The One-Stop Shop For All Your Subaru Needs'
        }, {
            id: 2,
            image: 'logo/17.jpg',
            title: 'Another image'
        }];
    }

    get activeSlide() {
        return this.slides[this.activeSlideIndex % this.slides.length];
    }

    nextSlide() {
        this.activeSlideIndex++;
    }

    previousSlide() {
        if (this.activeSlideIndex > 0) {
            this.activeSlideIndex--;
        }
    }
}
