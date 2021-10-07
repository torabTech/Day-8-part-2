angular.module('ShoppingAppUI',['ngRoute']).config(config);
function config ($routeProvider) {
    $routeProvider.when('/',{
        templateUrl : 'angular-app/home/home.html',
        controller: 'HomeController',
        controllerAs : 'vm'
    }).when('/item/:id',{
        templateUrl: 'angular-app/single-item/item.html',
        controller : 'ItemController',
        controllerAs : 'vm'
    })
    .otherwise({
        redirectTo : '/'
    });
}