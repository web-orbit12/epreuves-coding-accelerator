/* 
Créez un programme qui affiche le résultat et le reste d’une division entre deux nombres.


Exemples d’utilisation :
$> python exo.py 5 2
résultat: 2
reste: 1


$> python exo.py 10 0
erreur.


$> python exo.py 3 5
erreur.

*/

let arg1 = process.argv[2];
arg1 = parseInt(arg1);  // Ensure arg is treated as a number, not a string

let arg2 = process.argv[3];
arg2 = parseInt(arg2);  // Ensure arg is treated as a number, not a string


if ( arg1 < arg2 || arg2 === 0 || isNaN(arg1) || isNaN(arg2) ) {
    console.log("erreur");
} 
else {
    let division = arg1 / arg2;
    let result = Math.floor(division); // round downward to nearest integer
    console.log("resultat: " + result );
    console.log("reste: " + arg1 % arg2 );
}
 