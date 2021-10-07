angular.module('ShoppingAppUI').controller('ItemController',ItemController);

function ItemController($routeParams,ItemFactory){
    const id = $routeParams.id;
    const vm = this;

    ItemFactory.getOneItem(id).then(function(response){
        vm.item = response;
    });
}