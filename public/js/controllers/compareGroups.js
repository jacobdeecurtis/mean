'use strict';

angular.module('mean.compareGroups').controller('CompareGroupsController', ['$scope', '$stateParams', '$location', 'Global', 'CompareGroups', function ($scope, $stateParams, $location, Global, CompareGroups) {
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


var blankAttribute = {optionName: null, score: null, uom: null};
    $scope.attributesArray = [blankAttribute]; 
  
    $scope.add_attribute = function() {
        var newAttr = angular.copy(blankAttribute);
        $scope.attributesArray.push(newAttr);
    };

$scope.create = function() {
        var compareGroup = new CompareGroups({
            optionName: $scope.optionName,
            picture: $scope.picture,
            optionsKanye: $scope.attributesArray
        });

          
        compareGroup.$save(function(response) {
            $location.path('compareGroups/' + response._id);
        });
        
    };







   // optionsKanye: this.optionsKanye,
   //           optionName: this.optionName,
   //         optionScore: this.optionScore,
   //          optionAttributes: this.optionAttributes,
   //         attributeName: this.attributeName,
   //         optionImportance: this.optionImportance,
   //          optionuom: this.optionuom

//         compareGroup.$save(function(response) {
//               // $location.path('articles/' + response._id);
//             $location.path('compareGroups/' + response._id);
           
//             console.log('saved');
//         });
//     };
// }]);

 // $scope.find = function() {
 //        CompareGroups.query(function(compareGroups) {
 //            $scope.compareGroups = compareGroups;
 //        });
 //    };

 $scope.remove = function(compareGroup) {
        if (compareGroup) {
            compareGroup.$remove();

            for (var i in $scope.compareGroups) {
                if ($scope.compareGroups[i] === compareGroup) {
                    $scope.compareGroups.splice(i, 1);
                }
            }
        }
        else {
            $scope.compareGroup.$remove();
            $location.path('compareGroups');
        }
    };

    $scope.update = function() {
        var compareGroup = $scope.compareGroup;
        if (!compareGroup.updated) {
            compareGroup.updated = [];
        }
        compareGroup.updated.push(new Date().getTime());

        compareGroup.$update(function() {
            $location.path('compareGroups/' + compareGroup._id);
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