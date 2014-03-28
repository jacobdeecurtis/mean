'use strict';

angular.module('mean.compareGroups').controller('CompareGroupsController', ['$scope', '$stateParams', '$location', 'Global', 'CompareGroups', function ($scope, $stateParams, $location, Global, CompareGroups) {
    $scope.global = Global;

    $scope.optionNames = ["data.note"];


     $scope.data = {message: "compareGroups controller is getting through to this view"};
    // $scope.optionName = [blankAttribute];
    // $scope.optionNames = [];
    // $scope.option1 = 

    // var blankAttribute = {attributeName: null, score: null, uom: null};
    // $scope.attributesArray = [blankAttribute]; 
  
    // $scope.add_optionstoOptionArray = function() {
    //     var newAttr = angular.copy(blankAttribute);
   
    //     $scope.attributesArray.push(newAttr);
    //     return 
    // };

    
  
    $scope.name = "John Smith";
    $scope.contacts = [
      {type:'phone', value:'408 555 1212'},
      {type:'email', value:'john.smith@example.org'} ];
 
    $scope.greet = function() {
     alert(this.name);
    };
 
    $scope.addContact = function() {
     this.contacts.push({type:'email', value:'yourname@example.org'});
    };
 
    $scope.removeContact = function(contactToRemove) {
     var index = this.contacts.indexOf(contactToRemove);
     this.contacts.splice(index, 1);
    };
 
    $scope.clearContact = function(contact) {
     contact.type = 'phone';
     contact.value = '';
    };
  















    $scope.create = function() {
        var compareGroup = new CompareGroups({
            //"this" is the same thing as scope
            // optionsKanye: this.optionsKanye,
                optionName: this.optionName
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