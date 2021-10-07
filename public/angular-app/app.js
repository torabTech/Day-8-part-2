angular.module('ShoppingAppUI',['ngRoute']).config(config);
function config ($routeProvider) {
    $routeProvider.when('/',{
        templateUrl : 'angular-app/home/home.html',
        controller: 'HomeController',
        controllerAs : 'vm'
    })
    .otherwise({
        redirectTo : '/'
    });
}