'use strict';

angular.module('mean.articles').controller('ArticlesController', ['$scope', '$stateParams', '$location', 'Global', 'Articles', function ($scope, $stateParams, $location, Global, Articles) {
    $scope.global = Global;



    //this creates array allowing multiple attributes to be created using ng-click and ng-repeat on create.html
    // $scope.attributes = new Array();
    var blankAttribute = {attributeName: null, score: null, uom: null};
             $scope.attributesArray = [blankAttribute]; 
  
    $scope.add_attribute = function() {
        var newAttr = angular.copy(blankAttribute);
        $scope.attributesArray.push(newAttr);
    };

    $scope.create = function() {
        var article = new Articles({
            //"this" is the same thing as scope
            name: this.name,
            picture: this.picture,
            attributes: this.attributesArray,
            score: this.attributesArray.score
        });

        article.$save(function(response) {
            $location.path('articles/' + response._id);
        });

        // this.name = '';
        // this.image ='';
        // this.attributes ='';
        // this.scores ='';
        // this.unitOfMeasurement ='';
        
    };

 $scope.remove = function(article) {
        if (article) {
            article.$remove();

            for (var i in $scope.articles) {
                if ($scope.articles[i] === article) {
                    $scope.articles.splice(i, 1);
                }
            }
        }
        else {
            $scope.article.$remove();
            $location.path('articles');
        }
    };

    $scope.update = function() {
        var article = $scope.article;
        if (!article.updated) {
            article.updated = [];
        }
        article.updated.push(new Date().getTime());

        article.$update(function() {
            $location.path('articles/' + article._id);
        });
    };

    $scope.find = function() {
        Articles.query(function(articles) {
            $scope.articles = articles;
        });
    };

    $scope.findOne = function() {
        Articles.get({
            articleId: $stateParams.articleId
        }, function(article) {
            $scope.article = article;
        });
    };
    
}]);