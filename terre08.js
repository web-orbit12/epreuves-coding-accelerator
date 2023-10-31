/* 
Créez un programme qui affiche le résultat d’une puissance.


L’exposant ne pourra pas être négatif.


Exemples d’utilisation :
$> node exo.js 2 3
8

Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.


Fonctions interdites: 
-La fonction pow


*/

let arg1 = process.argv[2];
let arg2 = process.argv[3];

arg1 = Number(arg1);  // Convert arg to a number
arg2 = Number(arg2);  // Convert arg to a number

let result = arg1;

if (isNaN(arg1) || isNaN(arg2) || process.argv[4] || !Number.isInteger(arg1) || !Number.isInteger(arg2)) {
    console.log("Error: Invalid arguments. Please provide two integer arguments.");
} 

else if ( Math.sign(arg2) !== 1 ) {
    console.log("Negative exponent not accepted");
}

else if ( arg2 === 0 ) {
    if ( arg1 !== 0 ) { 
        console.log(1);
    }
    else {
        console.log(0);
    }
}

else {
    for (let i=1; i < arg2; i++) {
        result = result * arg1;
    } 
    console.log(result);
}
 