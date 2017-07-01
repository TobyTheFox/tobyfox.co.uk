/* Global angular */
var app = angular.module('root', ["ngRoute", "ngAnimate"]);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "/views/home.html"
        })
        .when('/tiles/:id', {
            templateUrl: function (params) {
                return '/views/' + params.id + '.html';
            }
        })
        .when('/portfolio/:id', {
            templateUrl: function (params) {
                return '/views/' + params.id + '.html';
            }
        })
        .otherwise({
            redirectTo: '/'
        });
    
    $locationProvider.html5Mode(true);
});

app.controller("index", ["$scope", function ($scope) {
    $scope.sections = [
        {
            title: "Programs",
            icon: "images/programs.png",
            imgAlt: "Projects I've built over time",
            colour: "cyan",
            template: "views/programs.html",
            navBar: 1
        },
        {
            title: "Portfolio",
            icon: "images/portfolio.png",
            imgAlt: "See my portfolio of work",
            colour: "yellow",
            template: "views/portfolio.html",
            navBar: 1
        },
        {
            title: "Photography",
            icon: "images/photography.png",
            imgAlt: "My photography",
            colour: "blue",
            template: "views/photography.html",
            navBar: 1
        },
        {
            title: "Production",
            icon: "images/production.png",
            imgAlt: "The things I have produced",
            colour: "green",
            template: "views/production.html",
            navBar: 0
        },
        {
            title: "Qualifications",
            icon: "images/qualifications.png",
            imgAlt: "View my current and prospective qualifications",
            colour: "red",
            template: "views/qualifications.html",
            navBar: 0
        }
    ];
}]);