'use strict';

/**
 * @ngdoc directive
 * @name barbershopApp.directive:pillarBox
 * @description
 * # pillarBox
 */
angular.module('barbershopApp')
  .directive('bshopPillarBox', function(PartialsPath) {
    return {
      restrict: 'E',
      templateUrl: PartialsPath + 'bshop_pillar_box.html',
      controllerAs: 'pillarBoxCtrl',
      controller: function postLink($scope, $element) {
      }
    };
  });
