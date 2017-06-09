//Exercice : Langues
var langue = "fr";
var message = "Je parle le french";

if(langue === "fr"){
  console.log(message);
} else if(langue === "en") {
  console.log("je parle l'english");
} else if (langue === "es") {
  console.log("je parle le spanish");
}

//Exercices : Affichage des scores
var score  = "100";
var resultat = "score";

if (score >= 90) {
	console.log("Rang A");
} else if(score < 90) {
	console.log("Rang B"); 
} else if(score <= 50){
	console.log("Rang C"); 
}

//Exercices : Mettre au pluriel
var mot = "pomme";
var nbr = "54";
var resultat = mot + "s";

if (mot = "pomme") {
	console.log(resultat);
}