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

module.constant('HaircutScheduleURL', 'https://eastvillagebarbershop.perfectmind.com/22867/Contacts/BookMe4?widgetId=fb596abb-e1eb-4c17-b417-03d57409a0ee&embed=true');
