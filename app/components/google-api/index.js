import angular from 'angular';

import DNLGApi from './dnlgapi-service';

export default angular.module('dnl.components.google-api', [])

.constant('apiKey', 'AIzaSyCwlVHbm34Cbq1rV2mW4MHGP1gBcu7vw9M')
.constant('placeId', 'ChIJEwu80FGk6IgRN6w1XJkluZA')
.service('DNLGApi', DNLGApi);
