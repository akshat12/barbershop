angular.module('barbershopApp')
  .directive('bshopGeolocation', function (PartialsPath) {
    return {
      templateUrl: PartialsPath + 'bshop_geolocation.html',
      restrict: 'E',
      controllerAs: 'locationCtrl',
      controller: function($scope, $element, NgMap) {
        NgMap.getMap().then(function(map) {
          console.log(map.getCenter());
          console.log('markers', map.markers);
          console.log('shapes', map.shapes);
        });
      },
      bindToController: true,
      scope: {}
    };
});