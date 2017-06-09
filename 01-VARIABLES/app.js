//Excercice : Diseur de bonne aventure
var bonjour = "Hello World";
var NbrEnfants = 4;
var NomMari = "Laurent";
var pays = "USA";
var metier = "Journaliste";
console.log("Vous serez " + metier + " et habiterez aux " + pays + ", serez marié à " + NomMari + " avec " + NbrEnfants + " enfants.");

//Excercice : Calculer l'age
var AnneeCourante = 2017;
var DateDeNaissance = 1990;
var age1 = AnneeCourante - DateDeNaissance;
console.log(age1);

//Exercice : Bientôt vieux
var age2 = 26;
var AgeMax = 83;
var denréeAlimentaire = "eau";
var consomationDeCetteDenréeParJour = 1;
var nbrDenree = consomationDeCetteDenréeParJour * 365 * (AgeMax - age2); 
console.log("Il vous reste " + nbrDenree + " litres d' " + denréeAlimentaire + " avant d'ateindre l'age de " + AgeMax + " ans.");

//Exercice : Priorités
var result = (1 + 2) * 3 + 4 / 2;
console.log(1+2);
console.log(3*3);
console.log(4/2);
console.log(9+2);
console.log(result);