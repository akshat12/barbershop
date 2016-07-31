'use strict';

/**
 * @ngdoc directive
 * @name barbershopApp.directive:jumbotron
 * @description
 * # jumbotron
 */
angular.module('barbershopApp')
  .directive('bstrapJumbotron', function (PartialsPath) {
    return {
      restrict: 'E',
      templateUrl: PartialsPath + 'bstrap_jumbotron.html',
      controllerAs: 'bstrapJumbotronCtrl',
      controller: function postLink($scope, $element) {
      }
    };
  });
