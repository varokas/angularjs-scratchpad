'use strict';

var controllers = angular.module("myApp.controllers", []);

controllers.controller("nameCtrl", function($scope, $window) {
    $scope.name = "name";

    $scope.doSubmit = function() {
        $window.location.href = "index2.html";
    }
});