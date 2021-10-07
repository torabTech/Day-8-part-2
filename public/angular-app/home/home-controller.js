angular.module('ShoppingAppUI').controller('HomeController',HomeController);

function HomeController(ItemFactory){
    const vm = this;
    vm.title = 'Item-List'

    ItemFactory.getAllItems().then(function(response){
        vm.items = response;
    });
}