export default class ContactController {
    constructor(apiKey, $sce, DNLGApi) {
        this.mapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}
        &q=D%26L+Performance+Gainesville+Subaru+Specialist's`;

        this.apiKey = apiKey;
        this.$sce = $sce;
        this.DNLGApi = DNLGApi;
        //this.PLACES_API_PATH = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${apiKey}`;

        this.DNLGApi.getPlaceDetails().then((response) => {
            this.placeDetails = response.data.result;
        });
    }

    trustSrc(src) {
        return this.$sce.trustAsResourceUrl(src);
    }
}
