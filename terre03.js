/* 

Créez un programme qui affiche l’alphabet à partir de la lettre donnée en argument en lettres minuscules suivi d’un retour à la ligne.


Exemples d’utilisation :
$> python exo.py n
nopqrstuvwxyz
$>


Attention : votre programme devra utiliser une boucle.

*/

let alpha = "abcdefghijklmnopqrstuvwxyz";
alpha = alpha.split("");

let arg = process.argv;

let startingLetter = arg[2].split("");
startingLetter = startingLetter[0];


// Error handling outside the loop
if (!isNaN(startingLetter)) {
    console.log("Please enter a letter");
} 

else {
    for (let i = 0; i < alpha.length; i++) {
        if (alpha[i] === startingLetter) {
            let newString = alpha.slice( i, alpha.length );
            newString = newString.join("");
            console.log(newString);
            break;
        }
    }
}