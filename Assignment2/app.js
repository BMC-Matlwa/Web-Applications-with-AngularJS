(function () {
    'use strict';

    angular
    .module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['$scope','ShoppingListCheckOffService'];
    function ToBuyController($scope, ShoppingListCheckOffService) {
        $scope.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

        $scope.buyItem = function (itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        };
    }

    AlreadyBoughtController.$inject = ['$scope','ShoppingListCheckOffService'];
    function AlreadyBoughtController($scope, ShoppingListCheckOffService) {
        $scope.boughtItems = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;

        // Initial list of items to buy
        var toBuyItems = [
            { name: "cookies", quantity: 10 },
            { name: "soda", quantity: 5 },
            { name: "chips", quantity: 3 },
            { name: "apples", quantity: 4 },
            { name: "bread", quantity: 2 }
        ];

        var boughtItems = [];

        service.getToBuyItems = function () {
            return toBuyItems;
        };

        service.getBoughtItems = function () {
            return boughtItems;
        };

        service.buyItem = function (itemIndex) {
            var item = toBuyItems.splice(itemIndex, 1)[0];
            boughtItems.push(item);
        };
    }
})();
