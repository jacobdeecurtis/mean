'use strict';

//Articles service used for articles REST endpoint
angular.module('mean.compareGroups').factory('compareGroups', ['$resource', function($resource) {
    return $resource('index/:compareGroupId', {
        compareGroupId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);