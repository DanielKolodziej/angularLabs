// JavaScript source code
var app = angular.module('myApp', []);
app.controller('MainCtrl', function
  ($scope) {
    //°C to °F
    //Multiply by 9, then divide by 5, then add 32
    //1st function convert Celsius to Fahrenheit
    $scope.conv1=function(num1) {
        $scope.result=((parseInt(num1)*9)/5) +32;
         $scope.nums=parseInt(num1);
    };
  });
  //used for loops
  app.filter('range', function() {
    return function(input, total) {
      total = parseInt(total);
      for (var i=1; i<=total; i++)
        input.push(i);
      return input;
    };
  });

