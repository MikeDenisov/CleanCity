'use strict';

/* Services */
var noGarbageServices = angular.module('noGarbageServices', ['ngResource']);


noGarbageServices.factory('User', ['$resource', function ($resource) {
    return $resource('rest/:method', {}, {
        getUserInfo: { method: 'POST', params: { method: 'get_user_info' } }
    });
}]);

noGarbageServices.factory('Garbage', ['$resource', function ($resource) {
    return $resource('rest/:action', {}, {
        postGarbageLocation: { method: 'POST', params: { method: 'post_garbage_location' } },
        getGarbageLocations: { method: 'POST', params: { method: 'get_garbage_locations' } }
    });
}]);