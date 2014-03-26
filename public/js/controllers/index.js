'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global', function ($scope, Global) {
    // console.log("index.js");
    $scope.global = Global;
}]);