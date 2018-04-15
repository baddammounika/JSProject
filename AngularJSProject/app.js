
var module = angular.module("jsonTableModule", []);
module.factory("apiCallFactory", function ($http, $q) {
    var deferred = $q.defer();
    function getData() {
        $http.get('https://jsonplaceholder.typicode.com/posts?Access-Control-Allow-Origin=true')
            .then(function (response) {
                deferred.resolve(response.data);
            })
        return deferred.promise;

    }
    return {
        getData: getData
    }
})
module.controller("tableController", function ($scope, $filter, apiCallFactory) {

    apiCallFactory.getData()
        .then(function (res) {
            $scope.rows = res;
        });
        
    $scope.propertyName = '';
    $scope.reverse = false;

    $scope.sortBy = function (propertyName) {
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;
        $scope.rows = $filter('orderBy')($scope.rows, $scope.propertyName, $scope.reverse);
    };

});
