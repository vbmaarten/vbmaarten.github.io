var phonecatApp = angular.module('aegeeowee', []);

phonecatApp.controller('MainCtrl', function ($scope) {
 
  $scope.watisaegee = function(){
	  $scope.text = {
		header: 'Wat is AEGEE',
		p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. ",
		p2: "Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
		p3: "Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. ",
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
		p1: "Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. ",
		p2: "Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. ",
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
		p1: "Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. ",
		p2: "Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet.",
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