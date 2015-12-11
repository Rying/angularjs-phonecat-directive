app.directive('phoneCatDirective', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'views/phone-cat-list.html'
  };
});