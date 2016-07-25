'use strict';

/**
 * @ngdoc directive
 * @name barbershopApp.directive:bshopFeatures
 * @description
 * # bshopFeatures
 */
angular.module('barbershopApp')
  .directive('bshopFeatures', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the bshopFeatures directive');
      }
    };
  });
