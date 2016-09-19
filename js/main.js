var app = angular.module("TwoHeadedSeal", ["$scope", "TwoHeadedSeal.controllers", "ngRoute"]);
app.config(["$routeProvider", function ($scope, $routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/home.html",
            // controller: "HomeController"
        })
        .when("/about", {
            templateUrl: "views/about.html",
            // controller: "AboutController"
            css: "/css/styles.css"

        })
        .when("/contact", {
            templateUrl: "views/contact.html",
            // controller: "ContactController"
        })
        .when("/services", {
            templateUrl: "views/services.html",
            // controller: "ServicesController"
        })
        .when("/portfolio", {
            templateUrl: "views/portfolio.html",
            // controller: "PortfolioController"
        })
        .when("/sixth", {
            templateUrl: "views/sixth.html",
            // controller: "SixthController"
        })
        .otherwise({
            redirectTo: "/"
        });
}]);