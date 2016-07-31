'use strict';

/**
 * @ngdoc directive
 * @name barbershopApp.directive:bshopEmailSubscribe
 * @description
 * # bshopEmailSubscribe
 */
angular.module('barbershopApp')
  .directive('bshopEmailSubscribe', function (PartialsPath) {
    return {
      templateUrl: PartialsPath + 'subscribe.html',
      restrict: 'E',
      controllersAs: 'ctrl',
      controller: function($scope, $element) {
      	
      }
    };
  });
