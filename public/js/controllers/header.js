'use strict';

angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [
    // {
    //     'title': 'Articles',
    //     'link': 'articles'
    // }, 
    // {
    //     'title': 'Decision Machine',
    //     'link': '/!#/compareGroups'
        
    // }, 
    {
        'title': 'Enter Data',
        'link': 'articles/create'
    }];
    
    $scope.isCollapsed = false;
}]);