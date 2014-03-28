'use strict';

//Articles service used for articles REST endpoint
angular.module('mean.compareGroups').factory('CompareGroups', ['$resource', function($resource) {
    return $resource('!#/compareGroups', {
        compareGroupId: '@_id'
    }, {
        // update: {
        //     // method: 'PUT'
        // }
    });
}]);