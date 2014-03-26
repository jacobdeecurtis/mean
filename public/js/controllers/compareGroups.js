'use strict';

angular.module('mean.compareGroups').controller('CompareGroupsController', ['$scope', 'Global', 'CompareGroups', function ($scope, Global) {
    $scope.global = Global;




    // this creates array allowing multiple attributes to be created using ng-click and ng-repeat on create.html
    // $scope.attributes = new Array();
    // var blankAttribute = {attributeName: null, score: null, uom: null};
    //          $scope.attributesArray = [blankAttribute]; 
  
    // $scope.add_attribute = function() {
    //     var newAttr = angular.copy(blankAttribute);
    //     $scope.attributesArray.push(newAttr);
    // };

    $scope.create = function() {
        var compareGroup = new CompareGroups({
            //"this" is the same thing as scope
            optionName: this.optionName,
            optionAttributes: this.optionName.optionAttributes,
            attributeName: this.optionAttributes.attributeName,
            optionImportance: this.optionAttributes.optionImportance,
             optionScore: this.optionAttributes.optionScore,
              optionuom: this.optionAttributes.optionuom
        });

        compareGroup.$save(function(response) {
            $location.path('compareGroups/' + response._id);
        });


        
    };

 

    $scope.find = function() {
        CompareGroups.query(function(compareGroups) {
            $scope.compareGroups = compareGroups;
        });
    };

    $scope.findOne = function() {
        CompareGroups.get({
            compareGroupId: $stateParams.compareGroupId
        }, function(compareGroup) {
            $scope.compareGroup = compareGroup;
        });
    };
    
}]);