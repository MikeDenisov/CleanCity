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

    $scope.testMarker = {
          "latitude": 50.45,
          "longitude": 30.523333
      };

    $scope.myMarkers = [
      {
          "latitude": 50.45,
          "longitude": 30.523333
      },
      {
          "latitude": 50.25,
          "longitude": 30.423333
      },
    ];

    $scope.map = {
        center: {
            latitude: 50.45,
            longitude: 30.523333
        },
        bounds: {

        },
        zoom: 12
    };
}]);



