'use strict';

angular.module('mean.compareGroups').controller('CompareGroupsController', ['$scope', '$stateParams', '$location', 'Global', 'CompareGroup', function ($scope, $stateParams, $location, Global, CompareGroups) {
    $scope.global = Global;

    //Below is for testing

//      $scope.optionNames = [];
//     // Add a Item to the list

// $scope.addItem = function () {

//     $scope.optionNames.push($scope.optionName);
//     console.log(optionName);

//     // Clear input fields after push
//     $scope.optionName = "";

// };






// var blankAttribute = 'test';
//     // console.log(blankAttribute);
//     $scope.attributes= [blankAttribute]; 

  
//     $scope.add_attribute = function() {
//         var newAttr = angular.copy(blankAttribute);
//         $scope.attributes.push(newAttr);
//     };

    // console.log(attributes);




  
 //    $scope.name = "John Smith";
 //    $scope.contacts = [
 //      {type:'phone', value:'408 555 1212'},
 //      {type:'email', value:'john.smith@example.org'} ];
 // console.log(  $scope.name );
 
 //    $scope.addContact = function() {
 //     this.contacts.push({type:'email', value:'yourname@example.org'});
 //    };
 
 //    $scope.removeContact = function(contactToRemove) {
 //     var index = this.contacts.indexOf(contactToRemove);
 //     this.contacts.splice(index, 1);
 //    };
 
 //    $scope.clearContact = function(contact) {
 //     contact.type = 'phone';
 //     contact.value = '';
 //    };
  

 // console.log(  $scope.contacts);











console.log('test');

    $scope.create = function() {
        console.log("In controller");
        var compareGroup = new CompareGroups({
         
            // optionsKanye: this.optionsKanye,
                optionName: this.optionName
            //     optionScore: this.optionsKanye.optionScore,
            // optionAttributes: this.optionAttributes,
            //     attributeName: this.optionAttributes.attributeName,
            //     optionImportance: this.optionAttributes.optionImportance,
            //     optionuom: this.optionAttributes.optionuom
        });

        compareGroup.$save(function(response) {
              // $location.path('articles/' + response._id);
            $location.path('compareGroups/' + response._id);
           
            console.log('saved');
        });
    };
}]);

 // $scope.find = function() {
 //        CompareGroups.query(function(compareGroups) {
 //            $scope.compareGroups = compareGroups;
 //        });
 //    };