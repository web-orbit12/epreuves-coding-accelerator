/*
Majuscule sur deux

Créez un programme qui met en majuscule une lettre sur deux d’une chaîne de caractères. Seule les lettres (A-Z, a-z) sont prises en compte.


Exemples d’utilisation :
$> python exo.py “Hello world !”
HeLlO wOrLd !


$> python exo.py 42
error

Afficher error et quitter le programme en cas de problèmes d’arguments.

*/

const input = process.argv[2]; 
let upperCaseInput = true;
let result = [];

function validateInput(input) {

    if (process.argv.length !== 3) return false;
    
    if ( !input || !input.trim() ) return false;

    // check if input has at least one letter with regex
    if (!/[a-zA-Z]/.test(input)) return false;

    else return true;
}

// Main logic
if (validateInput(input)) {
    for (let i=0; i < input.length; i++) {
        if ( !/[a-zA-Z]/.test(input[i]) ) {
            result.push(input[i]);
            continue;
        }

        else if (upperCaseInput === true) {
            result.push( input[i].toUpperCase() );
            upperCaseInput = !upperCaseInput;
        }
        else {
            result.push( input[i].toLowerCase() );
            upperCaseInput = !upperCaseInput;
        }
    }
    console.log( result.join("") );
}

else {
    console.log("error");
    process.exit();
}