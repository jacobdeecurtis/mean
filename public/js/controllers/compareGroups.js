'use strict';

angular.module('mean.compareGroups').controller('CompareGroupsController', ['$scope', '$stateParams', '$location', 'Global', 'CompareGroups', function ($scope, $stateParams, $location, Global, CompareGroups) {
    $scope.global = Global;

    $scope.create = function() {
        var compareGroup = new CompareGroups({
            //"this" is the same thing as scope
            optionsKanye: this.optionsKanye,
            optionAttributes: this.optionAttributes
        });

        compareGroup.$save(function(response) {
            $location.path('compareGroups/');
        });
    };
}]);


 