angular.module('noGarbageControllers', [])
    .controller('MainCtrl', [
        '$scope', 'Garbage',
        function ($scope, Garbage) {

            $scope.smallSidebar = true;
            $scope.showAbout = false;

        }
    ]);