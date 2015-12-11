describe('PhoneCatController', function() {
  beforeEach(module('phoneCat'));

  it('should the length of the phones to be 3', inject(function($controller) {
    var scope = {};
    $controller('PhoneCatController', {$scope:scope});
    expect(scope.phones.length).toBe(3);
  }));
});