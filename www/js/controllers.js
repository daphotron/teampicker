angular.module('starter.controllers', [])
.controller('TeamsController', function($scope, CardsService) {
  $scope.$on('$stateChangeStart', function(scope, next, current) {
    CardsService.updateCards();
  });

  $scope.subtractPeople = function() {
    if (CardsService.numberOfPeople > 2) {
      CardsService.numberOfPeople--;
    }
  };

  $scope.numberOfTeams = function() {
    return CardsService.numberOfTeams;
  };

  $scope.numberOfPeople = function() {
    return CardsService.numberOfPeople;
  };

  $scope.addPeople = function() {
    CardsService.numberOfPeople++;
  };

  $scope.subtractTeams = function() {
    if (CardsService.numberOfTeams > 2) {
      CardsService.numberOfTeams--;
    }
  };

  $scope.addTeams = function() {
    if (CardsService.numberOfTeams < CardsService.colors.length) {
      CardsService.numberOfTeams++;
    }
  };
})
.service('CardsService', function() {
  this.numberOfPeople = 4;
  this.numberOfTeams = 2;

  this.colors = ['red', 'blue', 'green', 'aliceblue', 'orange', 'yellow', 'turquoise'];
  this.cards = [];

  this.updateCards = function() {
    this.cards = [];
    var cardsPerColor = this.numberOfPeople / this.numberOfTeams;
    for (i = 0; i < this.numberOfPeople; i++) {
      this.cards.push({color: this.colors[i % this.numberOfTeams], revealed: false});
    }

    if (this.cards.length > this.numberOfPeople) {
      this.cards.pop();
    }
    shuffle(this.cards);
  };

  function shuffle(o) {
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }
})
.controller('SecondaryCtrl', function($scope, CardsService) {
  CardsService.updateCards();

  $scope.cards = function() {
    return CardsService.cards;
  };

  $scope.numberOfTeams = function() {
    return CardsService.numberOfTeams;
  };

  $scope.numberOfPeople = function() {
    return CardsService.numberOfPeople;
  };

  $scope.revealCard = function(card) {
    card.revealed = !card.revealed;
  }
})
