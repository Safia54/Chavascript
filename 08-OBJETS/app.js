//var jayce = {}; // nouveau
//var jayce = new Object(); // vieux 

var Dan = [17, "Femme", ["simple red","Kim","Lopez"]];

var couleur =  "roux";
var Danette = {
    "name" : "Danette",
    "age" : 17,
    "sexe" : "Femme",
    "musiques" : ["simple","Kim","Lopez"],
    "cheveux" : couleur,
    parle : function(){
        console.log("Bonjour je suis " + this.name );
    }
};

var jayce = Object.create(Danette);
    jayce.name = "Jayce";
    jayce.age = 10;

Danette.parle(); 
jayce.parle(); 

console.log( Danette );
console.log( jayce );