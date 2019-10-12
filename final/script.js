// JavaScript source code
var app = angular.module('myApp', []);
//constant variable
const RATE = 0.03;
//global variable for starting balance
var bal = 100;

app.controller('MainCtrl', function
  ($scope) {
	
$scope.myusers = [
  {username:'user1', password:'123123', initBal:0},
	{username:'admin', password:'admin', initBal:100}];
    
$scope.selectedItem = {name: "1yr", value: 1};
    	//array value of three time periods
    $scope.items = [
    		{name: "6mo", value: 0.5},
    		{name: "1yr", value: 1},
    		{name: "5yr", value: 5}
    		];
    
    $scope.bal = bal;
    $scope.newBal = 0;
    $scope.newBal += bal;

    //adds the user input to balance
    $scope.depo=function(num1) {
        $scope.result=$scope.newBal +parseInt(num1);
        $scope.newBal = $scope.result;
    };
    //subtracts user input from balance
    $scope.withd=function(num1) {
      if (parseInt(num1) <= $scope.newBal){
        $scope.result=$scope.newBal -parseInt(num1);
        $scope.newBal = $scope.result;
      } else {
        alert("You cannot withdraw more than you have!");
      }
    };
        //uses simple interest formula to calc the total result
    $scope.interest=function(num1) {
        $scope.result2=$scope.newBal * (1 + (RATE * num1));
    };
    //goes back to the login page
    $scope.back = function(){
      window.location = "index.html";
    };
//acts as the sign up function, pushes to existing users array
$scope.submit = function(){
	  
  if($scope.username && $scope.password){
  	    
  var user = $scope.username;
  	    
  var pass = $scope.password;
  	    
  alert("Welcome new user: " + user);
  	    
  	    
  $scope.myusers.push({
  	      
  username: user,
  	      
  password: pass,
  
  initBal: 100
  	    
  });
  
  window.location = "main.html";
  	  
  } else {
  	    
  alert("Invalid Login");
  	  
  }
  	
  };
//checks user input whether matches correct credentials
$scope.login = function(){
  var user = $scope.username;
  $scope.curr = $scope.username;
  if($scope.username == "admin" && $scope.password == "admin")
         {
              alert("Welcome existing user: " + user);
              window.location = "main.html";
         }
         else {
                 alert("The information entered is not correct");
       }
};

$scope.back = function(){
  alert("Thanks for banking with us!");
  window.location = "index.html";
};

});