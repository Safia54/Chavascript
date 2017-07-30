var element1 = "Pommes";
var element2 = "Poires";
var element3 = "Prunes";


// var liste = [];// version nouvelle de déclarer des tableaux, MAIS on ne va pas faire déclarer comme ça pour le moment
// var liste = new Array();// version démodée plus très usitée de déclarer des tableaux
// Les tableaux associatifs n'existent PAS en JavaScript. Il seront associé qu'à un nombre indexé. 
// MAIS les tableaux multidimensionnels existent en JavaScript 
// En Javascript, on ne stocke que des valeurs : que des tableaux, des variable et et des fonctions.

var liste = ["Pommes", "Poires", "Prunes"];

	console.log(liste.length); //3
	console.log(liste[2]); // "Prunes"
	console.log(liste[liste.length - 1] ); // "Prunes"

console.log(liste);//il va d'abord lire tout le code puis ensuite afficher
console.log(liste[1]);

liste.pop(); //retirer le dernier élément
liste.push("Fraises"); //ajouter un élément à la fin
liste.shift(); // retirer le premier élément
liste.unshift("Céleri"); // ajouter un élément au début

for (var i = 0; i < liste.length; i++) {
	console.log(liste[i]);
}

// Exercice : addition
var tableau = [1,2,3,4,5,7,8,9];
var addition = 0;
for (var i = 0; i < tableau.length; i++) {
	var addition = addition + tableau[i];	
}
	console.log(addition);

// Exercice : Vos meilleurs choix

// Solution 1 
var acteurs = ["Emma Stone", "Jennifer Aniston", "Sandra Bullock"];
	console.log("Le numéro 1 est " + acteurs[0] + " - Le numéro 2 est " + acteurs[1] + " - Le numéro 3 est " + acteurs[2]);


// Solution 2
var acteurs = ["Emma Stone", "Jennifer Aniston", "Sandra Bullock"];
for (var i = 0; i <= acteurs.length-1; i++) {
	console.log ("Le numéro " + (i+1) + " est " + acteurs[i]);
}

// Solution 3
var acteurs = ["Emma Stone", "Jennifer Aniston", "Sandra Bullock"];
for (var i = acteurs.length - 1; i >= 0; i--) {
	console.log ("Le numéro " + (i+1) + " est " + acteurs[i]);
}

// Solution bonus 
var acteurs = ["Emma Stone", "Jennifer Aniston", "Sandra Bullock"];
var position = ["Le premier est ", "Le deuxième est ", "Le troisième est "];


for (var i = 0; i < acteurs.length; i++) {
	
	console.log (position[i] + acteurs[i]);
}


// Exercice : clone
// solution SANS boucle (simple fait by myself):
var MarioWorld = ["Mario", "Luigi", "Peach"];
	console.log(MarioWorld);
	MarioWorld.push("Bowser");
	console.log(MarioWorld);
// solution AVEC boucle (compliqué pour rien, fait par un apprenant):
var marioArray = ["Mario", "Luigi", "Peach"];
var bowserArray = [];
for (var i = 0; i < marioArray.length; i++){
		bowserArray.push(marioArray[i]);
}

bowserArray.push('Bowser');
console.log( marioArray );
console.log( bowserArray );