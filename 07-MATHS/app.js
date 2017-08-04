Math.random(); // afficher les chiffres
Math.round(); //arrondi
Math.ceil(); //arrondi au plus haut
Math.floor(); // arrondi au plus bas

var aleatoire100 = Math.random() * 100;
var arrondi = Math.round(aleatoire100);

//Exercice : Minimum et maximum
var min = Math.min(7, 5, -12, 6, 32, 18, 14, -2);
var max = Math.max(-3, 9, 21, 36, 27, 54, 17, 35);
var addition = min + max;
console.log(min,max,addition);

//Exercice : Aléatoire 1
var floatBateau = 10.4;
var couleBateau = Math.floor(floatBateau);
var voleBateau = Math.ceil(floatBateau);
console.log(floatBateau, couleBateau, voleBateau);

//Exercice : Aléatoire 2
var aleatoire50_100 = Math.random() * 50 + 50; 

var aleatoire0ou1 = Math.round(Math.random());

var aleatoire0_10inclu = Math.round(Math.random() * 10);

console.log(aleatoire50_100, aleatoire0ou1, aleatoire0_10inclu);

//Exercice : Aléatoire 3
var mortalKombat = ["Goro", "Johnny Cago", "Kano", "Liu Kano", "Raiden", "Reptil", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero"];
var personnage = mortalKombat[Math.round(Math.random() * mortalKombat.length-1)];
console.log(mortalKombat); 
console.log(personnage);
