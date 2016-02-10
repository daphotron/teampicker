angular.module('starter.controllers', [])
.controller('TeamsController', function($scope) {
  $scope.peopleCount = 4;
  $scope.teamCount = 2;

  $scope.subtractPeople = function() {
    if ($scope.peopleCount > 2) {
      $scope.peopleCount--;
    }
  };

  $scope.addPeople = function() {
    $scope.peopleCount++;
  };

  $scope.subtractTeams = function() {
    if ($scope.teamCount > 2) {
      $scope.teamCount--;
    }
  };

  $scope.addTeams = function() {
    $scope.teamCount++;
  };
})

.controller('SecondaryCtrl', function($scope) {
})
