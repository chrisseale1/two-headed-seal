var app = angular.module("TwoHeadedSeal", ["$scope", "TwoHeadedSeal.controllers", "ngRoute"]);
app.config(["$routeProvider", function ($scope, $routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/home.html",
            // controller: "HomeController"
        })
        .when("/about", {
            templateUrl: "views/about.html",
            // controller: "aboutController"
        })
        .when("/contact", {
            templateUrl: "views/contact.html",
            // controller: "contactController"
        })
        .when("/services", {
            templateUrl: "views/services.html",
            // controller: "servicesController"
        })
        .when("/portfolio", {
            templateUrl: "views/portfolio.html",
            // controller: "portfolioController"
        })
        .otherwise({
            redirectTo: "/"
        });
}]);