'use strict';

/**
 * @ngdoc directive
 * @name barbershopApp.directive:pillarBox
 * @description
 * # pillarBox
 */
angular.module('barbershopApp')
  .directive('pillarBox', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the pillarBox directive');
      }
    };
  });
