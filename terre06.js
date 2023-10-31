/*
Créez un programme qui affiche l’inverse de la chaîne de caractères donnée en argument.


Exemples d’utilisation :
$> node exo.js “Hello world!”
!dlrow olleH


$> node exo.js “lehciM”
Michel

Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.


Fonctions interdites: 
-La fonction reverse

*/

let arg = process.argv[2];


/* testing data type */
//console.log("arg: " + arg);
//console.log("array length: " + arg.length);
//console.log(typeof(arg));

let reversedText = [];

/* Method 1 */
/*for (let i = arg.length -1; i >= 0; i--) {
    reversedText.push(arg[i]);
    console.log ( arg[i] );
}*/

if ( !isNaN(arg) ) { // isNan converts string to number automatically, if needed to check
    console.log("Please insert a text");
}

else if ( arg === undefined || arg === null) {
    console.log("Please provide a text");
}

else if ( process.argv[3] ) {
    console.log("Please provide only one argument. Else place within quotes for multiple words");
}

else {
    /* Easiest method */
    for (let i = 0; i < arg.length; i++) {
        reversedText.unshift(arg[i]); // using unshift to reverse the order elements are added in the array 
        //console.log ( arg[i] );
    }

    console.log( reversedText.join('') ); 
}