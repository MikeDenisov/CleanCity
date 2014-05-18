angular.module('noGarbageControllers', [])
    .controller('MainCtrl', [
        '$scope', 'Garbage',
        function ($scope, Garbage) {
            $scope.garbageMarkers = Garbage.getGarbageLocationList();

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

            $scope.smallSidebar = true;
            $scope.showAbout = false;

            $scope.map = {
                center: {
                    latitude: 50.45,
                    longitude: 30.523333
                },
                zoom: 12
            };
        }
    ]);