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
      // template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        // element.append(
        //   '<div class=pillar-box> Test </div>'
        // )
      },
      templateUrl: 'views/pillar_box.html'
    };
  });
