'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;




    this creates array allowing multiple attributes to be created using ng-click and ng-repeat on create.html
    $scope.attributes = new Array();
    var blankAttribute = {attributeName: null, score: null, uom: null};
             $scope.attributesArray = [blankAttribute]; 
  
    $scope.add_attribute = function() {
        var newAttr = angular.copy(blankAttribute);
        $scope.attributesArray.push(newAttr);
    };

    $scope.create = function() {
        var compareGroup = new CompareGroups({
            //"this" is the same thing as scope
            optionKanye: this.optionKanye,
            optionName: this.optionKanye.optionName,
            compareGroupattributes: this.optionKanye.attributes,
            compareGroupattributeName: this.optionKanye.attributes.attributeName,
        	compareGroupimportance: this.optionKanye.attributes.importance,
        	compareGroupscore: this.optionKanye.attributes.score,
        	compareGroupuom: this.optionKanye.attributes.uom,
        });

        compareGroup.$save(function(response) {
            $location.path('index/' + response._id);
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