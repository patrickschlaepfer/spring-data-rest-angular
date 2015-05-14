'use strict';

var landiApp = angular.module("landiApp", [ 'ngResource' , 'spring-data-rest' ]);
			
landiApp.controller('SamplesListEmbeddedItemsController', function ($scope, $http, SpringDataRestAdapter) {
	console.log('hallo');
    var httpPromise = $http.get('/binarydatas').success(function (response) {
        $scope.response = angular.toJson(response, true);
    });

    SpringDataRestAdapter.process(httpPromise).then(function (processedResponse) {
        $scope.binarydatas = processedResponse._embeddedItems;
        $scope.processedResponse = angular.toJson(processedResponse, true);
    });
})