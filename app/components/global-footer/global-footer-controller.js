export default class GlobalFooterController {
    constructor($window) {
        this.$window = $window;

        this.socialButtons = [
            {
                type: 'twitter',
                url: 'https://www.twitter.com/dnlperformance'
            },
            {
                type: 'facebook',
                url: 'https://www.facebook.com/DL-Performance-706771426015879/'
            },
            {
                type: 'gplus',
                url: 'https://plus.google.com/111279510024015588573/about'
            }
        ];
    }

    redirect(url) {
        this.$window.location.href = url;
    }
}
