'use strict';

/**
 * @ngdoc function
 * @name barbershopApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the barbershopApp
 */
var DURATION = 700;

function NavbarCtrl($scope, $element) {
    $scope.navbarOpen = false;
    var $navbarMobile = $element.find('.navbar-mobile-content');

    $scope.slideDownNavbar = function() {
        $scope.navbarOpen = !$scope.navbarOpen;
        $navbarMobile.slideToggle(DURATION);
    };
}

angular.module('barbershopApp').controller('NavbarCtrl', NavbarCtrl);
