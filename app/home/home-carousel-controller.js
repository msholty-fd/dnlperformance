export default class HomeCarouselController {
    constructor() {
        this.activeSlideIndex = 0;
        this.slides = [{
            id: 1,
            image: 'https://d9fsetxygehvw.cloudfront.net/assets/logo/3-min.jpg',
            title: 'Gainesville\'s Premiere Subaru Specialists',
            tagline: 'The One-Stop Shop For All Your Subaru Needs'
        }, {
            id: 2,
            image: 'https://d9fsetxygehvw.cloudfront.net/assets/logo/17-min.jpg',
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
        } else {
            this.activeSlideIndex = this.slides.length - 1;
        }
    }
}
