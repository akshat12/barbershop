'use strict';

/**
 * @ngdoc overview
 * @name barbershopApp
 * @description
 * # barbershopApp
 *
 * Main module of the application.
 */
var module = angular
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

module.constant('PartialsPath', '/scripts/directives/partials/');