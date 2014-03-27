'use strict';

angular.module('mean.compareGroups').controller('CompareGroupsController', ['$scope', '$stateParams', '$location', 'Global', 'CompareGroups', function ($scope, $stateParams, $location, Global, CompareGroups) {
    $scope.global = Global;

    $scope.create = function() {
        var compareGroup = new CompareGroups({
            //"this" is the same thing as scope
            optionsKanye: this.optionsKanye,
            //     optionName: this.optionsKanye.optionName,
            //     optionScore: this.optionsKanye.optionScore,
            // optionAttributes: this.optionAttributes,
            //     attributeName: this.optionAttributes.attributeName,
            //     optionImportance: this.optionAttributes.optionImportance,
            //     optionuom: this.optionAttributes.optionuom
        });

        compareGroup.$save(function(response) {
            $location.path('compareGroups');
        });
    };
}]);

 // $scope.find = function() {
 //        CompareGroups.query(function(compareGroups) {
 //            $scope.compareGroups = compareGroups;
 //        });
 //    };