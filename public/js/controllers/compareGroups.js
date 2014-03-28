'use strict';

angular.module('mean.compareGroups').controller('CompareGroupsController', ['$scope', '$stateParams', '$location', 'Global', 'CompareGroups', function ($scope, $stateParams, $location, Global, CompareGroups) {
    $scope.global = Global;

    //Below is for testing

    $scope.optionNames = ["data.note"];


     $scope.data = {message: "compareGroups controller is getting through to this view"};
    
    //Below is for articles stuff. Above is for compareGroup stuff. I would separate them but I can't figure out how : (
    //this creates array allowing multiple attributes to be created using ng-click and ng-repeat on create.html
   
    var blankAttribute = 'test';
    $scope.attributesArray = [blankAttribute]; 

  
    $scope.add_attribute = function() {
        var newAttr = angular.copy(blankAttribute);
        $scope.attributesArray.push(newAttr);
    };

    console.log(attributesArray);



    
  
    $scope.name = "John Smith";
    $scope.contacts = [
      {type:'phone', value:'408 555 1212'},
      {type:'email', value:'john.smith@example.org'} ];
 console.log(  $scope.name );
 
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
  

 console.log(  $scope.contacts);













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