angular.module('barbershopApp')
  .directive('bshopGeolocation', function (PartialsPath) {
    return {
      templateUrl: PartialsPath + 'bshop_geolocation.html',
      restrict: 'E',
      controllerAs: 'locationCtrl',
      controller: function($scope, $element, NgMap) {
        NgMap.getMap();
      },
      bindToController: true,
      scope: {}
    };
});