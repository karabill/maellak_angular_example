var module = angular.module("sampleApp", ['ngRoute']);

module.config(['$routeProvider',
function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'list.html',
    controller: 'ListController'
  }).
  when('/view/:id', {
    templateUrl: 'detail.html',
    controller: 'DetailController'
  }).
  otherwise({
    redirectTo: '/'
  });
}]);

items = [
{name:'A', id: 1},
{name:'X', id: 2}
]

module.controller("ListController", function($scope) {
  $scope.items = items;
});

module.controller("DetailController", function($scope, $routeParams) {
  $scope.item = items[$routeParams.id-1];
});
