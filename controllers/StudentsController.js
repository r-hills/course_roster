studentRoster.controller('StudentsCtrl', function StudensCtrl($scope, StudentsFactory) {
	$scope.students = StudentsFactory.students;
	$scope.StudentsFactory = StudentsFactory; 
	
});