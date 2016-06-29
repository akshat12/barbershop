'use strict';

/**
 * @ngdoc directive
 * @name barbershopApp.directive:pillarBox
 * @description
 * # pillarBox
 */
angular.module('barbershopApp')
  .directive('pillarBox', function(PartialsPath) {
    return {
      restrict: 'E',
      templateUrl: PartialsPath + 'pillar_box.html',
      controllerAs: 'pillarBoxCtrl',
      controller: function postLink($scope, $element) {
      }
    };
  });
