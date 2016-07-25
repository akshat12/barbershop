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
      controllerAs: 'schedCtrl',
      controller: function($scope, $element, $window) {
        this.submitSchedule = function($event){
          $event.stopPropagation();
          $event.preventDefault();
          $window.open("https://eastvillagebarbershop.perfectmind.com/22867/Contacts/BookMe4?widgetId=fb596abb-e1eb-4c17-b417-03d57409a0ee&embed=true");
        }
      },
      bindToController: true,
      scope: {}
    };
});