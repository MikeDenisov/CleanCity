noGarbageControllers.controller('eventsCtrl', [
        '$scope', 'Garbage',
        function ($scope, Garbage) {
            $scope.garbageMarkers = Garbage.getGarbageLocationList();
alert ('fsd');
            $scope.smallSidebar = true;
            $scope.showAbout = false;

        }
    ]);