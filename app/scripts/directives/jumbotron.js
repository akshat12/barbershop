'use strict';

/**
 * @ngdoc directive
 * @name barbershopApp.directive:jumbotron
 * @description
 * # jumbotron
 */
angular.module('barbershopApp')
  .directive('jumbotron', function (PartialsPath) {
    return {
      restrict: 'E',
      templateUrl: PartialsPath + 'jumbotron.html',
      controllerAs: 'jumbotronCtrl',
      controller: function postLink($scope, $element) {
      }
    };
  });
