var phonecatApp = angular.module('aegeeowee', []);

phonecatApp.controller('MainCtrl', function ($scope) {
 
  $scope.watisaegee = function(){
	  $scope.text = {
		header: 'Wat is AEGEE',
		p1: "Een studentenvereniging",
		p2: "",
		p3: "",
		p4: ""
	  };
	  
	  $scope.img1 = {
		src: "brussels.jpg",
		txt: "AEGEE-Delft in Brussel"
	  };
	  
	  $scope.img2 = {
		src: "brussels.jpg",
		txt: "AEGEE-Delft nog een keer in Brussel"
	  };
  };
  
   $scope.programma = function(){
	  $scope.text = {
		header: 'Programma',
		p1: "Vanalles",
		p2: "",
		p3: "",
		p4: ""
	  };
	  
	  $scope.img1 = {
		src: "brussels.jpg",
		txt: "AEGEE-Delft in Brussel"
	  };
	  
	  $scope.img2 = {
		src: "brussels.jpg",
		txt: "AEGEE-Delft nog een keer in Brussel"
	  };
  };
  
    $scope.liftreis = function(){
	  $scope.text = {
		header: 'Lekker liften',
		p1: "Vet leuk",
		p2: "",
		p3: "",
		p4: ""
	  };
	  
	  $scope.img1 = {
		src: "brussels.jpg",
		txt: "AEGEE-Delft in Brussel"
	  };
	  
	  $scope.img2 = {
		src: "brussels.jpg",
		txt: "AEGEE-Delft nog een keer in Brussel"
	  };
  };
  
     $scope.inschrijven = function(){
	  $scope.text = {
		header: 'Inschrijven',
		p1: "Gewoon doen",
		p2: "",
		p3: "",
		p4: ""
	  };
	  
	  $scope.img1 = {
		src: "brussels.jpg",
		txt: "AEGEE-Delft in Brussel"
	  };
	  
	  $scope.img2 = {
		src: "brussels.jpg",
		txt: "AEGEE-Delft nog een keer in Brussel"
	  };
  };
  
  $scope.watisaegee()
});