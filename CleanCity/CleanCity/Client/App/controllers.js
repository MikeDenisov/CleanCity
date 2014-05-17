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
    $scope.myMarkers = Garbage.getGarbageLocationList();

    $scope.testMarker = {
          "latitude": 50.45,
          "longitude": 30.523333
    };

    //$scope.markerClick = function () {
    //    alert("as");
    //};

    //$scope.mapPolygons = [{
    //    path: [{
    //        latitude: 32.22,
    //        longitude: 34.33
    //    },
    //        {
    //            latitude: 0.22,
    //            longitude: 0.33
    //        },
    //        {
    //            latitude: 32.22,
    //            longitude: 35.33
    //        },
    //        {
    //            latitude: 12.22,
    //            longitude: 12.33
    //        }],
    //    fill: {
    //        color: "#00bbf2",
    //        opacity: 0.8
    //    },
    //    stroke: {
    //        color: "#cacaca",
    //        weight: 5,
    //        opacity: 1.0
    //    }
    //}];


    //$scope.myMarkers = [
    //  {
    //      "latitude": 50.48,
    //      "longitude": 30.513333,
    //      "windowOptions": {
    //          "content": "<img src='http://image.tsn.ua/media/images2/original/Aug2009/7b42be2bf7_150706.jpg'> <span>toras</span> <span>today</span>",
    //      }
    //  },
    //  {
    //      "latitude": 50.41,
    //      "longitude": 30.423333
    //  }
    //];

    $scope.map = {
        center: {
            latitude: 50.45,
            longitude: 30.523333
        },
        zoom: 12
    };
}]);



