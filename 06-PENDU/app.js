var ville = "Namur";
const pays = "Belgique";
let commune = "Ixelles";
// pays = "France"; // pas bien

function deplacer (){
	var ville = "France";
	console.log("Je me déplace vers " + ville);
}
deplacer();
console.log(ville);

//Exercice : jeu du pendu
const MotADeviner = ['B','O','N','J','O','U','R'];
console.log['MotADeviner' + MotADeviner]

var LettresProposees= ['','','','','','',''];

function GuessLetter() {
	for (let i = 0; i < MotADeviner.length; i++) {
		if (x === MotADeviner[i]) {
			LettresProposees.splice(i,1,GuessLetter())
			//?????????????????????,,,,,,,, 	FAIRE CHEZ SOI A LA MAISON !!!!!
		}
	}
}	