/*
Créez un programme qui affiche le nombre de caractères d’une chaîne de caractères passée en argument.


Exemples d’utilisation :
$> python exo.py “Hello world!”
12


$> python exo.py
erreur.


$> python exo.py “Bonjour” “Aurevoir”
erreur.

$> python exo.py 10
erreur.


Fonctions interdites: 
-La fonction length
-La fonction size

*/

let arg = process.argv[2];


/* testing data type */
//console.log("arg: " + arg);
//console.log("array length: " + arg.length);
//console.log(typeof(arg));

let isEndOfString = false;
let count = 0;

while ( isEndOfString === false ) {

    if ( !isNaN(arg) ) { // isNan converts string to number automatically, if needed to check
        console.log("erreur");
        break;
    }
    
    else if ( arg === undefined || arg === null) {
        console.log("erreur");
        break;
    }
    
    else if ( process.argv[3] ) {
        console.log("erreur");
        break;
    }

    else if ( arg[count] === undefined ) {
        isEndOfString = true; 
        console.log(count);
        break;
    }
    
    else {
        count++;
    }

}