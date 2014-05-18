'use strict';

/* Services */
var noGarbageServices = angular.module('noGarbageServices', ['ngResource']);


noGarbageServices.factory('User', ['$resource', function ($resource) {
    return $resource('rest/user/:id', {}, {
        getUserInfo: { method: 'GET', params : {} },
        updateUserInfo: { method: 'POST'}
    });
}]);

noGarbageServices.factory('Garbage', ['$resource', function ($resource) {
    return $resource('api/garbagePoints/:id', {id:'@id'}, {
        postGarbageLocation: { method: 'PUT'},
        getGarbageLocation: { method: 'GET' },
        getGarbageLocationList: { method: 'GET', isArray: true}
    });
}]);