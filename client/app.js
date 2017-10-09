var app = angular.module('blogger', ['ngRoute', 'ngResource', 'blogger.controllers', 'blogger.factories']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'index.html'
    })  
    .when('/posts', {
        templateUrl: 'views/list.html',
        controller: 'PostListController'
    })
    .when('/posts/:someId/update', {
        templateUrl: 'views/single_update.html',
        controller: 'UpdatePostController'
    })
    .when('/posts/:someId', {
        templateUrl: 'views/single_view.html',
        controller: 'PostController'
    })
    // .when('/newpost', {
    //     templateUrl: 'views/submit_post.html',
    //     controller: 'PostController'
    // })
    .otherwise({
        redirectTo: '/'
    });
}]);

