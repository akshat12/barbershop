'use strict';

describe('Directive: bshopFeatures', function () {

  // load the directive's module
  beforeEach(module('barbershopApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<bshop-features></bshop-features>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the bshopFeatures directive');
  }));
});
