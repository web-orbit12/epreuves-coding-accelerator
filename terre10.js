/*

Créez un programme qui affiche si un nombre est premier ou pas.


Exemples d’utilisation :
$> node exo.js 5
Oui, 5 est un nombre premier.

$> node exo.js 6
Non, 6 n’est pas un nombre premier.

Attention : 0 et 1 ne sont pas des nombres premiers. Gérez les erreurs d’arguments.

*/

let arg = process.argv[2];
arg = Number(arg);


let checkPrimeNumber = (arg) => {

    if (isNaN(arg)) {
        console.log("Please insert a number");
        return;
    } else if (process.argv[3]) {
        console.log("Please provide only one argument.");
        return;
    } else if (arg === 0 || arg === 1) {
        console.log(`Non, ${arg} n'est pas un nombre premier.`);
        return;
    } else {
        let isPrime = true;  // Assume arg is prime until proven otherwise
        for (let i = 2; i <= Math.sqrt(arg); i++) {
            if (arg % i === 0) {
                isPrime = false;  // arg is divisible by i, so it's not prime
                break;
            }
        }
        if (isPrime) {
            console.log(`Oui, ${arg} est un nombre premier.`);
        } else {
            console.log(`Non, ${arg} n'est pas un nombre premier.`);
        }
    }

}

checkPrimeNumber(arg);
