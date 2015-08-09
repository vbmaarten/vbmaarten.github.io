var phonecatApp = angular.module('aegeeowee', []);

phonecatApp.controller('MainCtrl', function ($scope, $sce) {
 
  $scope.watisaegee = function(){
	  $scope.text = {
		header: 'Wat is AEGEE?',
		p1:  $sce.trustAsHtml("<b>Bij AEGEE kun jij alles</b> omtrent lekker eten, activiteiten organiseren, taal, cultuur, liften en gewoon goedkoop op reis gaan door Europa. Dat maakt dat wij de studentenreisvereniging van Delft zijn! Met minstens een reis per maand bieden wij de kans om op een goedkope, avontuurlijke manier Europa te leren kennen. Nu denk je misschien; een reisvereniging? Maar ik wil toch lekker dingen in Delft doen?. Niet getreurd, dat kan natuurlijk ook bij ons! AEGEE is een goede vereniging voor mensen die houden van ondernemen, die ideeen hebben en een gevoel voor grenzeloosheid. Bij AEGEE wordt er naar je geluisterd. Bovendien is bij AEGEE-Delft iedereen lekker zichzelf en dat zorgt voor een gezellige sfeer."),
		p2:  $sce.trustAsHtml("<b>Wat kun je met ons doen in Delft?</b><br /><br /> Elke dinsdagavond dineren en borrelen wij in de Koornbeurs (Voldersgracht 9). Een keer per maand wordt er door onze kookcommissie een groot diner geserveerd met een internationaal thema! Daarnaast organiseren wij in Delft door het jaar heen feesten en activiteiten. Zoals een underground blacklightfeest door de kunst- en cultuurcommissie, een 13-gangenkerstdiner en een nachtelijke fietstocht. Elke week is er naast de borrel nog wel iets extra\u2019s te doen. Dit varieert van bierbrouwen met ons dispuut Unibrouw tot buiten in de donkere Delftsche nachten met elkaar een film kijken of gewoon een avondje sporten. En er is nog veel meer! Deze activiteiten worden door onze eigen leden bedacht en georganiseerd. Heb jij een goede idee voor een groepsactiviteit? Grijp je kans!"),
		p3:  $sce.trustAsHtml("<b>Waar reis jij straks heen?</b><br /><br />AEGEE is een netwerk van verenigingen met in totaal ruim 13.000 leden in meer dan 200 steden door heel Europa. Regelmatig reizen wij met het vliegtuig, de trein of liftend naar onze zusterverenigingen. Het gastvrije karakter van AEGEE zorgt ervoor dat we door heel Europa gehost kunnen worden bij andere AEGEE\u2019ers, die ons de leukste plekjes van hun stad laten zien. Met ons ga je niet zomaar reizen. Met ons leer je de wereld en haar mensen kennen. Zo zijn wij het afgelopen jaar naar onder andere Krakow, Passau, Cagliari, Berlijn en Brussel geweest en kwamen daar met de mooiste verhalen van terug. Daarnaast trokken de stoere leden van ons dispuut Caput Lupinum onverschrokken door de Oostenrijkse Alpen om het ultieme gevoel van vrijheid te ervaren."),
		p4:  $sce.trustAsHtml("<b>Summer University</b><br /><br />De Summer University is het grootste project van AEGEE. Op allerlei locaties in Europa worden zeer goedkope zomervakanties georganiseerd voor en door studenten. Je leert twee weken lang studenten uit heel Europa kennen door te sporten, feesten, rond te reizen of een taalcursus te volgen. Er valt jaarlijks te kiezen uit ruim 80 bestemmingen.<br /><br />Kortom: de mooiste ervaringen van je leven doe je op bij AEGEE-Delft.")
	  };
	  
	  $scope.img1 = {
		src: "brussels.jpg",
		txt: "AEGEE-Delft in Brussel"
	  };
	  
	  $scope.imagelink = {src: "https://www.facebook.com/media/set/?set=a.803200839743767.1073741856.147899015273956&type=3"}	
  };
  
   $scope.programma = function(){
	  $scope.text = {
		header: 'Programma',
		p1: $sce.trustAsHtml("Een omschrijving van de activiteiten vind je in je binas!	"),
		p2: $sce.trustAsHtml('<table style="border-collapse:collapse;border-spacing:0;width:100%"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">Begintijd</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">Eindtijd</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">Onderdeel</th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;background-color:#530e53;color:#ffffff">Maandag</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;background-color:#530e53"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;background-color:#530e53"></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">17:00</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">20:00</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">Inbieren</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">20:00</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">21:00</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">Schilderen met Bob Ross</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">21:00</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">22:00</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">Eurotapas &amp; Barista-training</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">22:30</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">0:00</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">Live Band</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">0:00</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">1:00</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">Voedertijd</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;background-color:#530e53;color:#ffffff">Dinsdag</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;background-color:#530e53"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;background-color:#530e53"></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">17:00</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">20:00</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">Pre-pilsen</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">20:00</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">21:00</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">Wat is AEGEE?</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">21:00</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">21:45</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">Bierbrouw workshop</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">21:45</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">22:30</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">1 Minute of Fame</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">22:30</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">0:00</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">DJ met live Saxofonist</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">0:00</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">1:00</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">Voedertijd</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;background-color:#530e53;color:#ffffff">Woensdag</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;background-color:#530e53"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;background-color:#530e53"></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">17:00</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">20:00</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">After-dinner-dip-therapie</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">20:00</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">21:00</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">Klus je outfit</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">21:30</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">23:00</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">Bier spelen</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">22:30</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">0:00</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">Karaoke</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">0:00</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">1:00</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">Voedertijd</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;background-color:#530e53;color:#ffffff">Donderdag</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;background-color:#530e53"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;background-color:#530e53"></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">13:00</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">18:30</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">Eerste hulp bij uitbrakken</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">18:30</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">1:00</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">De Nulste borrel</td></tr></table>'),
		p3: "",
		p4: ""
	  };

	  $scope.imagelink = {src: "https://www.facebook.com/media/set/?set=a.703125006418018.1073741848.147899015273956&type=3"}
	  
	  $scope.img1 = {
		src: "https://scontent.xx.fbcdn.net/hphotos-xtf1/t31.0-8/10257859_703125203084665_2701933478000210135_o.jpg",
		txt: "Agora Patra"
	  };
  };
  
    $scope.liftreis = function(){
	  $scope.text = {
		header: 'Lift mee naar Hamburg',
		p1: $sce.trustAsHtml("Van <b>2 t/m 4 oktober</b> organiseert AEGEE-Delft de introductieliftreis naar Hamburg! Voor de nog onervaren lifter organiseren wij vooraf aan deze reis een liftworkshop. Dus of je nu al heel de wereld rondgelift bent, of nog nooit met je duim omhoog langs de weg hebt gestaan, iedereen kan meedoen! Tijdens deze trip zullen wij een bezoek brengen aan AEGEE-Hamburg en aan hun hand alle voor toeristen onbekende plekjes in de stad ontdekken! De reis is open voor leden en niet-leden.	"),
		p2: "",
		Hp3: "",
		p4: ""
	  };

	  $scope.imagelink = {src: "https://www.facebook.com/media/set/?set=a.727693353961183.1073741853.147899015273956&type=3"}
	  
	  $scope.img1 = {
		src: "https://scontent.xx.fbcdn.net/hphotos-xtp1/t31.0-8/10460605_727693627294489_827561284992213002_o.jpg",
		txt: "Liftreis naar Budapest"
	  };
  };
  
     $scope.inschrijven = function(){
	  $scope.text = {
		header: 'Leuk dat je lid wil worden!',
		p1: $sce.trustAsHtml("Kom even bij ons langs voor een inschrijfformulier of klik <a href='http://aegee-delft.nl/en/lid-worden/'>hier</a> om je online in te schrijven."),
		p2: $sce.trustAsHtml(''),
		p3: "",
		p4: ""
	  };
	  $scope.imagelink = {src: "https://www.facebook.com/media/set/?set=a.861961077201076.1073741861.147899015273956&type=3"}
	  $scope.img1 = {
		src: "https://scontent.xx.fbcdn.net/hphotos-xfp1/t31.0-8/11045361_861964610534056_2385158455267824917_o.jpg",
		txt: "Reis naar Riga, Tallinn & Helsinki"
	  };
  };
  
  $scope.watisaegee()
});