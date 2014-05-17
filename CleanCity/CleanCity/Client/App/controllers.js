'use strict';

/* Controllers */

var noGarbageControllers = angular.module('noGarbageControllers', []);



noGarbageControllers.controller('UsersCtrl', ['$scope', 'User',
function ($scope, User) {
    $scope.myInfo = User.getUserInfo();
}]);

noGarbageControllers.controller('MapCtrl', ['$scope', 'User',
function ($scope, User) {
    $scope.myInfo = User.getUserInfo();
}]);

noGarbageControllers.controller('MainCtrl', ['$scope', 'User',
function ($scope, User) {
    $scope.myInfo = User.getUserInfo();
}]);



