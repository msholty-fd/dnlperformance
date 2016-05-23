export default class DNLGApi {
    constructor($window, $q, apiKey, placeId, $http) {
        this.CLIENT_ID = '832323286560-dgof3190ln42jfuh3ah450pdfpv9tspc.apps.googleusercontent.com';
        this.API_SCOPE = 'https://www.google.com/m8/feeds/contacts/default/full';
        this.CONTACTS_API_PATH = '/m8/feeds/contacts/default/full';

        this.USE_IMMEDIATE_AUTH = false;
        this.PLACES_API_URL = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${apiKey}`;

        this.$window = $window;
        this.$q = $q;
        this.$http = $http;
    }

    getPlaceDetails() {
        if (this.getPlaceDetailsPromise === undefined) {
            this.getPlaceDetailsPromise = this.$http.get(this.PLACES_API_URL);
        }

        return this.getPlaceDetailsPromise;
    }
}
