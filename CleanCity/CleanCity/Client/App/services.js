'use strict';

/* Services */
var noGarbageServices = angular.module('noGarbageServices', ['ngResource']);


noGarbageServices.factory('User', ['$resource', function ($resource) {
    return $resource('rest/user', {}, {
        getUserInfo: { method: 'GET'},
        updateUserInfo: { method: 'POST'}
    });
}]);

noGarbageServices.factory('Garbage', ['$resource', function ($resource) {
    return $resource('api/garbagePoints', {}, {
        postGarbageLocation: { method: 'PUT'},
        getGarbageLocations: { method: 'POST'}
    });
}]);