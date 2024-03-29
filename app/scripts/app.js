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
    'ngRoute', 'ngMap'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
  });

module.constant('PartialsPath', '/scripts/directives/partials/');
module.constant('HaircutScheduleURL', 'https://eastvillagebarbershop.perfectmind.com/22867/Contacts/BookMe4?widgetId=fb596abb-e1eb-4c17-b417-03d57409a0ee&embed=true');
module.constant('GoogleMapsAPIKey', 'AIzaSyBu_qbwVUR3l3I4e1VD-8p17OkZODoxgtw');
