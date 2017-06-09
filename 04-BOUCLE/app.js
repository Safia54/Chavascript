var int=0;

while(int <= 10){
	console.log(int);
	int = int + 1;
	console.log(int);
}

for (var int = 0; int < 10; int+=2){
	console.log(int);
}

// Exercice : Pair et impair
for (var i = 0; i <= 20; i++) {
	var moduloI = i%2;
	if (moduloI ===0) {
		console.log(i + " est pair.");
	} else {
		console.log(i + " est impair.");
	}
}
// Exercice : Multiplication Tables
for (var i = 0; i <= 10; i++) {
	var resultat = i * 9;
	console.log(i + " X 9 = " + resultat);

}

// Exercice : assigner des grades
var note = function(a) {
	var grade = " ";
	for(var i = 0; i < 101; i++) {

		if(a > 90) {
			return grade = "A";
		}else if(a > 80){
			return grade = "B";
		}else if(a > 70){
			return grade = "C";
		}else if(a > 65){
			return grade = "D";
		}else {
			return grade = "F";
		}
	}
}
console.log(grade);

// Exercice : pyramide
var pyramide = " ";

for(var i = 0; i <= 4; i++) {
	pyramide = pyramide + "*";
	console.log(pyramide);
}