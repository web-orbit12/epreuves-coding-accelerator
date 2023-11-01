/* 
Créez un programme qui affiche la racine carrée d’un entier positif.


Exemples d’utilisation :
$> node exo.js 9
3

Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.


Fonctions interdites: 
-La fonction sqrt

*/

let arg1 = process.argv[2];
arg1 = Number(arg1);  // Convert arg to a number



if ( isNaN(arg1) || !Number.isInteger(arg1) ) {
    console.log("Error: Invalid arguments. Please provide an integer argument.");
} 

else if ( process.argv[3] ) {
    console.log("Error: Please provide one number only.");
} 

else if ( Math.sign(arg1) !== 1 ) {
    console.log("Negative number not accepted");
}

else {
    /* METHOD 1 */
    for (let i=1; i < arg1 / 2; i++) {
        if ( i*i === arg1) {
            console.log(i);
            break;
        }
        else if ( i === arg1 - 1 ) {
            console.log("No results found");
        }
    }

    /* METHOD 2 */
    //let result = arg1 ** 0.5; // find square root
    //console.log(result); 
}