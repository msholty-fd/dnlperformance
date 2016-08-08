export default class DNLGApi {
    constructor($http) {
        this.PLACES_API_URL = '/wam/google/places';
        this.$http = $http;
    }

    getPlaceDetails() {
        if (this.getPlaceDetailsPromise === undefined) {
            this.getPlaceDetailsPromise = this.$http.get(this.PLACES_API_URL);
        }

        return this.getPlaceDetailsPromise;
    }
}
