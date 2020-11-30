
(function () {
    var app = angular.module('panettiere', []);

    app.controller('ProductController', ['$scope', '$http', function (scope, http) {

        http.get('../data/cakes.json').success(function (data) {
            scope.cakes = data;
        });

        http.get('../data/cookies.json').success(function (data) {
            scope.cookies = data;
        });

        http.get('../data/pies.json').success(function (data) {
            scope.pies = data;
        });

        http.get('../data/pastries.json').success(function (data) {
            scope.pastries = data;
        });

    }]);

    app.directive('productGallery', function () {
        return {
            template:
                '<div id="{{product.id}}" class="container-fluid well text-center">' +
                '<h2>{{product.type}}</h2>' +
                '<div ng-repeat="list in product.lists" class="row">' +
                '<div ng-repeat="x in list.row" class="col-sm-3 col-xs-6">' +
                '<img ng-src="{{x.photo}}" alt="{{x.name}}" class="img-responsive gallery">' +
                '<h3>{{x.name}}</h3>' +
                '</div>' +
                '</div>' +
                '</div>'
        };
    });

})();
