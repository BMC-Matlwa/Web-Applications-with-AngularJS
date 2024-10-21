(function(){
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) 
    {
        $scope.lunchItems='';
        $scope.message = '';
    

    $scope.Checker = function(){
        if ($scope.lunchItems.trim() == ""){
            $scope.message = 'Please enter data first';
            return;
        }

        var items = $scope.lunchItems.split(',');
        var CountItems = items.filter( item=>item.trim() !== "").length;

        if (CountItems === 0) 
            {
            $scope.message = "Please enter data first";
            } 
        else if (CountItems <= 3) 
            {
            $scope.message = "Enjoy!";
            } 
        else 
        {
            $scope.message = "Too much!";
        }
        };
    }
})();