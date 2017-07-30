var reslutat;
	reslutat = "Hello Ella";
	console.log(reslutat);
	reslutat = "Salut bébé";
	console.log(reslutat);
	reslutat = 75;
	console.log(reslutat);

function FaisQuelqueChose(){
	var ville = "Bruxelles";
	console.log(ville);
}

var MaFonction = function(prenom = "Alex"){
	var pays = prenom + " Belgique";
	return pays;
}

var monPays1= MaFonction("Teddy");
var monPays2= MaFonction("JO");
var monPays3= MaFonction("Safia");

FaisQuelqueChose();
console.log(MaFonction());
console.log( monPays1);
console.log( monPays2);
console.log( monPays3);


//Exercice : Calculs
function soustraction(a, b) {
	var soustraction = a - b ;
	return soustraction;
}

function division(a, b){
	var division = a / b ;
	return division; 
}

function multiplication(a, b){
	var multiplication = a * b ;
	return multiplication;
}

function pourcentage (a, b){
	var pourcentage = a/b * 100 + "%";
	return pourcentage;
}

function vitesse (a,b){
	var vitesse = a/b + "km/h";
	return vitesse
}

console.log(soustraction(6,2));
console.log(division(6,2));
console.log(multiplication(6,2));
console.log(pourcentage(17,20));
console.log(vitesse(100,2));
