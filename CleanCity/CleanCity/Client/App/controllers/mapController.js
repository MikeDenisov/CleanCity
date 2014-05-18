noGarbageControllers.controller('MapCtrl', [
            '$scope', 'User',
            function($scope, User) {
                $scope.myInfo = User.getUserInfo();
            }
        ]);