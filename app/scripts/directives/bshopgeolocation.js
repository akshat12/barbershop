angular.module('barbershopApp')
  .directive('bshopGeolocation', function (PartialsPath, GoogleMapsAPIKey) {
    return {
      templateUrl: PartialsPath + 'bshop_geolocation.html',
      restrict: 'E',
      controllerAs: 'locationCtrl',
      controller: function($scope, $element, NgMap) {
        $scope.googleMapsUrl = 'https://maps.googleapis.com/maps/api/js?key=' + GoogleMapsAPIKey;
        NgMap.getMap();
      },
      bindToController: true,
      scope: {}
    };
});
