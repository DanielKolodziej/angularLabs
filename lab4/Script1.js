// JavaScript source code
var app = angular.module('myApp', []);
app.controller('validateCtrl', function($scope) {
	//default values for input fields
    $scope.first = '';
    $scope.last = '';
    $scope.ssnNum = '';
	//alert to user whether the form has been submitted or is further invalid
    $scope.checkForm = function(){
		var x = $scope.ssnNum.toString();
		var fname = isNaN($scope.first);
		var lname = isNaN($scope.last);
		//ssn must be 9 characters
		//name cannot be numbers
		if (x.length != 9){
			alert("The following SSN given has invalid length");
		} else if (!fname || !lname) {
			alert("The following first and/or last name given is invalid");
		} else {
			alert("Alright, successfully submitted!");
		}
	};
});