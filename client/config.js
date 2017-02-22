var app = angular.module("app", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "partials/index.html",
        controller: "DashboardController"
    }).when("/customers", {
      templateUrl: "partials/customers.html",
      controller: "CustomerController"
    }).when("/orders", {
      templateUrl: "partials/orders.html",
      controller: "OrderController"
    }).when("/products", {
      templateUrl: "partials/products.html",
      controller: "ItemController"
    })
});
