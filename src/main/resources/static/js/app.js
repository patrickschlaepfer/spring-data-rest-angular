var landiApp = angular.module("landiApp", [ 'ngResource' ]);

landiApp.controller("HttpController", [ '$scope', '$resource',
		function($scope, $resource) {
			//
			// GET Action Method
			//
			var User = $resource('/user/:userId', {userId:'@userId'});
			User.get( {userId:25}, function(user){
				$scope.profile = user;
			})
			//
			// Query Action Method
			//
			var BinaryData = $resource('/binarydata');
			BinaryData.query(function(binarydatas){
				$scope.binarydatas = binarydatas;					
			});
		} ]);
			