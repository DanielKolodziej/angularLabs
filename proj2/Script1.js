// JavaScript source code
 angular.module('myApp',[])
		.controller('GuessTheNumberController', GuessTheNumberController);
		function GuessTheNumberController($scope) {
			//array to track all user guesses during a session
			$scope.userGuesses = [];
			//default selected name game mode
			$scope.selectedItem = {name: "medium", value: 20};
			//array value of three game modes dictating the max value
			$scope.items = [
			{name: "easy", value: 10},
			{name: "medium", value: 20},
			{name: "hard", value: 100}
			];
			//default start value
			$scope.default = 20;
			//function to check user input validity and keep track of tries
			$scope.checkGuess = function () {
				//if input is higher or lower than random value
				$scope.deviation = $scope.original - $scope.guess;
				//user attempts
				$scope.tries = $scope.tries + 1;
				var guess = $scope.guess;
				//pushes user guesses into array
				$scope.userGuesses.push(guess);
				//if not a number, display alert and remove from array
				if (isNaN(guess) == true){
					alert("Not a Number! Try again");
					$scope.tries = $scope.tries - 1;
					$scope.userGuesses.pop();
				//if null, display alert and remove from array
				} else if (guess == null){
					alert("Must Enter Value! Try again");
					$scope.tries = $scope.tries - 1;
					$scope.userGuesses.pop();
				//if guess matches, display win alert and reset game
				} else if ($scope.guess == $scope.original){
					alert("You WIN, the winning number was :" + $scope.original)
					$scope.initializeGame($scope.default);
				//if attempts more than 4, display lose alert, all guesses, and reset game
				} else if ($scope.tries > 4){
					alert("You lose, the winning number was : " + $scope.original + "\n" +
					"Your guesses were : " + $scope.userGuesses);
					$scope.initializeGame($scope.default);
				}
			};
			//function to initialize and reset the game based on chosen difficulty
			$scope.initializeGame=function(max) {
				$scope.default = max;
				$scope.userGuesses = [];
				$scope.tries = 0;
				$scope.original = Math.floor((Math.random() * $scope.default) + 1);
				$scope.guess = null;
				$scope.deviation = null;
			};
			//initialize with default val
			$scope.initializeGame($scope.default);
		};