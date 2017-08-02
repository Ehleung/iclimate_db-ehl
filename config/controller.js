var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
	console.log("Hello world from controller");

	var refresh = function() {
		$http.get('/storylist').then(doneCallbacks, failCallbacks);
		$scope.story = null;
	};

	refresh();
	
	$scope.addStory = function() {
		console.log($scope.story);
		$scope.story.comments = ["none"];
		$http.post('/storylist', $scope.story).then(doneCallbacks, failCallbacks);
		refresh();
	}

	function doneCallbacks(res) {
		console.log("Data received");
		$scope.storylist = res.data;
	}

	function failCallbacks(err) {
		console.log(err.message);
	}
}]);