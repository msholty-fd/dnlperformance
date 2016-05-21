export default class GlobalFooterController {
    constructor($window) {
        this.$window = $window;

        this.socialButtons = [
            {
                type: 'twitter',
                url: 'www.twitter.com/dnlperformance'
            },
            {
                type: 'facebook',
                url: 'www.twitter.com/dnlperformance'
            },
            {
                type: 'gplus',
                url: 'www.twitter.com/dnlperformance'
            }
        ];
    }

    redirect(url) {
        this.$window.location.href = url;
    }
}
