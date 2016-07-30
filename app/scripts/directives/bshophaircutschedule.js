'use strict';

/**
 * @ngdoc directive
 * @name barbershopApp.directive:bshopEmailSubscribe
 * @description
 * # bshopEmailSubscribe
 */
angular.module('barbershopApp')
  .directive('bshopHaircutSchedule', function (PartialsPath, HaircutScheduleURL) {
    return {
      templateUrl: PartialsPath + 'bshop_haircut_schedule.html',
      restrict: 'E',
      controllerAs: 'schedCtrl',
      controller: function($scope, $element, $window) {
        this.submitSchedule = function($event){
          $event.stopPropagation();
          $event.preventDefault();
          $window.open(HaircutScheduleURL);
        }
      },
      bindToController: true,
      scope: {}
    };
});
  