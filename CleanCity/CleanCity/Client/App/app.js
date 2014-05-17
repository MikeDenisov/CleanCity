'use strict';

var app = angular.module('noGarbage', [
    // Angular modules 
    'ngAnimate',        // animations
    'ngRoute',          // routing
    'ngSanitize',       // sanitizes html bindings (ex: sidebar.js)
    'ngResource',       // resource :)

    'noGarbageControllers',
    'noGarbageServices',

        // Custom modules 
       // 'common',           // common functions, logger, spinner
       // 'common.bootstrap', // bootstrap dialog wrapper functions

        // 3rd Party Modules
       // 'ui.bootstrap'      // ui-bootstrap (ex: carousel, pagination, dialog)
    ]);

    // Handle routing errors and success events
    app.run(['$route', function ($route) {
        // Include $route to kick start the router.
    }]);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
        when('/users', {
            templateUrl: 'view/users.html',
            controller: 'UsersCtrl'
        }).

        when('/notFound', {
            templateUrl: 'view/notFound.html'
        }).
        when('/error', {
            templateUrl: 'view/error.html'
        }).
        when('/', {
            templateUrl: 'Client/View/main.html'
        }).
        otherwise({
            redirectTo: '/notFound'
        });
    }]);