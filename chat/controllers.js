var module = angular.module("sampleApp", []);

module.controller("MyController", function($scope, $http, $timeout) {
	$scope.myMessage = {
		text : ""
	};

	$scope.messages = [];

	$scope.downloadMessages = function() {
		$http.get('/getJson.php')
			.success(function(data, status, headers, config) {
				$scope.messages = data;
				$timeout($scope.downloadMessages, 0);
			}).error(function(data, status, headers, config) {
				$timeout($scope.downloadMessages, 0);
			});
	}
	$timeout($scope.downloadMessages, 0);
			

	$scope.sendMessage = function() {
		$http.get('/insert.php?msg=' + $scope.myMessage.text)
			.success(function(data, status, headers, config) {
				$scope.myMessage.text = "";
			}).error(function(data, status, headers, config) {
			});
	}
});
