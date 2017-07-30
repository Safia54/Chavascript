//Exercice : Langues
var langue = "fr";
var message = "Bonjour tout le monde !";

if(langue === "fr"){
  console.log(message);
} else if(langue === "en") {
  console.log("Hello world !");
} else if (langue === "es") {
  console.log("Hola mundo !");
}

//Exercices : Affichage des scores
var score  = "100";
var resultat = "Vous êtes classé au "; //pas compris comment utiliser la variable resultat dans cet exercice

if (score >= 90) {
	console.log(resultat + "Rang A");
} else if(score < 90) {
	console.log(resultat + "Rang B"); 
} else if(score <= 50){
	console.log(resultat + "Rang C"); 
}

//Exercices : Mettre au pluriel
var mot = "pomme";
var nbr = 54;
var resultat = "J'ai " + nbr + " " + mot + "s";

if (nbr > 1) {
	console.log(resultat);
}