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
      	iconContainerClass: '@',
        includeHome: '='
      },
      controller: function() {
      	this.links = [
      		{
      			text: 'Contact',
      			link: 'contact'
      		}
      	];
        if (this.includeHome) {
          this.links.unshift({
            text: 'Home',
            link: 'home'
          });
        }
      }
    };
  });

