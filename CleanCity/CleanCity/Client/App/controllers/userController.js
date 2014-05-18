$(function() {
    angular.module('noGarbageControllers', [])
        .controller('UserCtrl', [
            '$scope', 'User',
            function($scope, User) {
                $scope.myInfo = User.getUserInfo();
            }
        ]);
});