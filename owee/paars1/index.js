var phonecatApp = angular.module('aegeeowee', []);

phonecatApp.controller('MainCtrl', function ($scope, $sce) {
 
  $scope.watisaegee = function(){
	  $scope.text = {
		header: 'Wat is AEGEE',
		p1:  $sce.trustAsHtml("<b>Bij AEGEE kun jij alles</b> omtrent lekker eten, activiteiten organiseren, taal, cultuur, liften en gewoon goedkoop op reis gaan door Europa. Dat maakt dat wij de studentenreisvereniging van Delft zijn! Met minstens een reis per maand bieden wij de kans om op een goedkope, avontuurlijke manier Europa te leren kennen. Nu denk je misschien; een reisvereniging? Maar ik wil toch lekker dingen in Delft doen?. Niet getreurd, dat kan natuurlijk ook bij ons! AEGEE is een goede vereniging voor mensen die houden van ondernemen, die ideeen hebben en een gevoel voor grenzeloosheid. Bij AEGEE wordt er naar je geluisterd. Bovendien is bij AEGEE-Delft iedereen lekker zichzelf en dat zorgt voor een gezellige sfeer."),
		p2:  $sce.trustAsHtml("<b>Wat kun je met ons doen in Delft?</b><br /><br /> Elke dinsdagavond dineren en borrelen wij in de Koornbeurs (Voldersgracht 9). Een keer per maand wordt er door onze kookcommissie een groot diner geserveerd met een internationaal thema! Daarnaast organiseren wij in Delft door het jaar heen feesten en activiteiten. Zoals een underground blacklightfeest door de kunst- en cultuurcommissie, een 13-gangenkerstdiner en een nachtelijke fietstocht. Elke week is er naast de borrel nog wel iets extra\u2019s te doen. Dit varieert van bierbrouwen met ons dispuut Unibrouw tot buiten in de donkere Delftsche nachten met elkaar een film kijken of gewoon een avondje sporten. En er is nog veel meer! Deze activiteiten worden door onze eigen leden bedacht en georganiseerd. Heb jij een goede idee voor een groepsactiviteit? Grijp je kans!"),
		p3:  $sce.trustAsHtml("<b>Waar reis jij straks heen?</b><br /><br />AEGEE is een netwerk van verenigingen met in totaal ruim 13.000 leden in meer dan 200 steden door heel Europa. Regelmatig reizen wij met het vliegtuig, de trein of liftend naar onze zusterverenigingen. Het gastvrije karakter van AEGEE zorgt ervoor dat we door heel Europa gehost kunnen worden bij andere AEGEE\u2019ers, die ons de leukste plekjes van hun stad laten zien. Met ons ga je niet zomaar reizen. Met ons leer je de wereld en haar mensen kennen. Zo zijn wij het afgelopen jaar naar onder andere Londen, Parijs, Budapest, Zaragoza en Istanbul geweest en kwamen daar met de mooiste verhalen van terug. Daarnaast trokken de stoere leden van ons dispuut Caput Lupinum onverschrokken door de Oostenrijkse Alpen om het ultieme gevoel van vrijheid te ervaren."),
		p4:  $sce.trustAsHtml("<b>Summer University</b><br /><br />De Summer University is het grootste project van AEGEE. Op allerlei locaties in Europa worden zeer goedkope zomervakanties georganiseerd voor en door studenten. Je leert twee weken lang studenten uit heel Europa kennen door te sporten, feesten, rond te reizen of een taalcursus te volgen. Er valt jaarlijks te kiezen uit ruim 80 bestemmingen.<br /><br />Kortom: de mooiste ervaringen van je leven doe je op bij AEGEE-Delft.")
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
		src: "https://scontent.xx.fbcdn.net/hphotos-xtf1/t31.0-8/10257859_703125203084665_2701933478000210135_o.jpg",
		txt: "Agora Patra"
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
		Hp3: "",
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
		header: 'Leuk dat je lid wil worden!',
		p1: "Klik <a href='www.google.nl'>hier</a> om je in te schrijven",
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