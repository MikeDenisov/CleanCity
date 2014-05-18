'use strict';

var app = angular
    .module('noGarbage', [
    // Angular modules 
    'ngAnimate',        // animations
    'ngRoute',          // routing
    'ngSanitize',       // sanitizes html bindings (ex: sidebar.js)
    'ngResource',       // resource :)
    'google-maps',      // angular google maps api
    'localization',

    'noGarbageControllers',
    'noGarbageServices',
    'angularFileUpload'

        // Custom modules 
       // 'common',           // common functions, logger, spinner
       // 'common.bootstrap', // bootstrap dialog wrapper functions

        // 3rd Party Modules
       // 'ui.bootstrap'      // ui-bootstrap (ex: carousel, pagination, dialog)
    ]);

app.constant("routes", {
    user: "/user",
    post: "/post",
    events: "/events",
    notFound: "/notFound",
    error: "/error",
    main: "/"
});

app.config(['$routeProvider', '$httpProvider', 'routes', function ($routeProvider, $httpProvider, routes) {
    //
    //$httpProvider.defaults.headers.common = { "AccessToken": "Token" };
    //
    var pathToIncs = 'Client/view/';

    $routeProvider
        .when(routes.post, { templateUrl: pathToIncs + 'addPoint.html', controller: 'PostCtrl' })
        .when(routes.user, { templateUrl: pathToIncs + 'userInfo.html', controller: 'UserCtrl' })
        .when(routes.events, { templateUrl: pathToIncs + 'events.html', controller: 'EventsCtrl' })
        .when(routes.notFound, { templateUrl: pathToIncs + 'notFound.html' })
        .when(routes.error, { templateUrl: pathToIncs + 'error.html' })
        .when(routes.main, { templateUrl: pathToIncs + 'main.html' })
        .otherwise({ redirectTo: routes.notFound });
}]);

var noGarbageControllers = angular.module('noGarbageControllers', []);