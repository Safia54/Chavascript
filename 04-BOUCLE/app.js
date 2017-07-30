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

//Solution avec modulo de Gabriele
for (var i = 0; i <= 20; i++) {
	var moduloI = i%2;
	if (moduloI ===0) {
		console.log("Gabriele dit que " + i + " est pair.");
	} else {
		console.log("Gabriele dit que " + i + " est impair.");
	}
} 

// Solution by myself
for(var i=0; i<=20; i+=2) {
	console.log("Safia dit que " + i + " est pair");
}

for(var i=1; i<=20; i+=2) {
	console.log("Safia dit que " + i + " est impair");
}

// Exercice : Multiplication Tables
for (var i = 0; i <= 10; i++) {
	var resultat = i * 9;
	console.log(i + " X 9 = " + resultat);

}

// Exercice : assigner des grades


function grade(point){
var grade = " ";
	if(point > 90) {
			return grade = "vous avez le grade A";
		}else if(point > 80){
			return grade = "vous avez le grade B";
		}else if(point > 70){
			return grade = "vous avez le grade C";
		}else if(point > 65){
			return grade = "vous avez le grade D";
		}else {
			return grade = "vous avez le grade F";
		}
}


for(var point=0; point<=100; point++) {
	var resultat = "Pour " + point + " points, " + grade(point);
	console.log(resultat);
}


// Exercice : pyramide

// Solution by Hugo 
var pyramide = " ";

for(var i = 0; i <= 4; i++) {
	pyramide = pyramide + "*";
	console.log(pyramide);
}


