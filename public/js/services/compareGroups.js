'use strict';

//Articles service used for compareGroups REST endpoint
angular.module('mean.compareGroups').factory('compareGroups', ['$resource', function($resource) {
    return $resource('compareGroups/:compareGroupId', {
        compareGroupId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);