'use strict';

/**
 * @ngdoc directive
 * @name barbershopApp.directive:bshopIconBar
 * @description
 * # bshopIconBar
 */
angular.module('barbershopApp')
  .directive('bshopIconBar', function (PartialsPath) {
    return {
      templateUrl: PartialsPath + 'bshop_icon_bar.html',
      restrict: 'A',
      controllerAs: 'ctrl',
      bindToController: true,
      scope: {
      	iconContainerClass: '@'
      },
      controller: function() {
      	this.social = [
      		{
      			icon: 'facebook',
      			link: 'https://www.facebook.com/East-Village-Barbershop-521982801344259/'
      		},
      		{
      			icon: 'twitter',
      			link: 'twitter'
      		},
      		{
      			icon: 'tumblr',
      			link: 'tumblr'
      		}
      	];
      }
    };
  });

