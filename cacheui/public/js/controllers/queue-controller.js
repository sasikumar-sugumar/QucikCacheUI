(function(app) {
    app.controller('QueueController', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {
        $scope.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
        };

        $scope.showAddJob = false;


    }]);
})(cacheui);