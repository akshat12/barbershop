'use strict';

/**
 * @ngdoc overview
 * @name barbershopApp
 * @description
 * # barbershopApp
 *
 * Main module of the application.
 */
angular
  .module('barbershopApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
