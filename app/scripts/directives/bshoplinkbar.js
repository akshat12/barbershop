'use strict';

/**
 * @ngdoc directive
 * @name barbershopApp.directive:bshopIconBar
 * @description
 * # bshopIconBar
 */
angular.module('barbershopApp')
  .directive('bshopLinkBar', function (PartialsPath) {
    return {
      templateUrl: PartialsPath + 'bshop_link_bar.html',
      restrict: 'A',
      controllerAs: 'ctrl',
      bindToController: true,
      scope: {
      	iconContainerClass: '@'
      },
      controller: function() {
      	this.links = [
	      	{
      			text: 'Home',
      			link: 'home'
      		},
      		{
      			text: 'Testimonials',
      			link: 'testimonials'
      		},
      		{
      			text: 'Contact',
      			link: 'contact'
      		}
      	];
      }
    };
  });

