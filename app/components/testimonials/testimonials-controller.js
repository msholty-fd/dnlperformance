export default class TestimonialsController {
    constructor(DNLGApi) {
        this.DNLGApi = DNLGApi;

        this.DNLGApi.getPlaceDetails().then((response) => {
            this.reviews = response.data.result.reviews;
        });
    }
}
