'use strict';

/* Controllers */

var noGarbageControllers = angular.module('noGarbageControllers', []);



noGarbageControllers.controller('UserCtrl', ['$scope', 'User',
function ($scope, User) {
    $scope.myInfo = User.getUserInfo();
}]);

noGarbageControllers.controller('MapCtrl', ['$scope', 'User',
function ($scope, User) {
    $scope.myInfo = User.getUserInfo();
}]);

noGarbageControllers.controller('MainCtrl', ['$scope', 'Garbage',
function ($scope, Garbage) {
    $scope.myInfo = Garbage.getGarbageLocations();


    $scope.map = {
        center: {
            latitude: 45,
            longitude: -73
        },
        zoom: 8
    };
}]);



