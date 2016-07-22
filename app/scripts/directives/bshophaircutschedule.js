'use strict';

/**
 * @ngdoc directive
 * @name barbershopApp.directive:bshopEmailSubscribe
 * @description
 * # bshopEmailSubscribe
 */
angular.module('barbershopApp')
  .directive('bshopHaircutSchedule', function (PartialsPath) {
    return {
      templateUrl: PartialsPath + 'bshop_haircut_schedule.html',
      restrict: 'E',
      controller: function($scope, $element) {
        $scope.submitSchedule = function($evt){
          debugger;
          $evt.stopPropagation();
          $evt.preventDefault();
        }
      },
      controllersAs: 'schedCtrl'
      
    };
});