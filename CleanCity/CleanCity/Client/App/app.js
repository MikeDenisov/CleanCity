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
    when('/user', {
        templateUrl: 'Client/view/user.html',
        controller: 'UserCtrl'
    }).

        when('/events', {
            templateUrl: 'Client/view/events.html',
            controller: 'EventsCtrl'
        }).

    when('/notFound', {
        templateUrl: 'Client/view/notFound.html'
    }).
    when('/error', {
        templateUrl: 'Client/view/error.html'
    }).
    when('/', {
        templateUrl: 'Client/view/main.html'
    }).
    otherwise({
        redirectTo: '/notFound'
    });
}]);