/*
Créez un programme qui détermine si une chaîne de caractère se trouve dans une autre.

Exemples d’utilisation :
$> python exo.py bonjour jour
true

$> python exo.py bonjour joure
false

$> python exo.py 42
error

Afficher error et quitter le programme en cas de problèmes d’arguments.

*/

const str1 = process.argv[2];
const str2 = process.argv[3];
let result = false;


function validateInput(str1, str2) {
    if (process.argv.length !== 4) {
        console.log("error");
        return false;
    }

    if (str1 === "" || str2 === "") {
        console.log("error");
        return false;
    }

    if (str2.length > str1.length) {
        console.log("false");
        return false;
    }

    return true;
}


if (validateInput(str1, str2)) {

    for (let i=0; i <= str1.length - str2.length; i++) {
        if (str1[i] === str2[0]) {
            for(let j=0; j<str2.length; j++) {
                if (str1[i+j] !== str2[j]) {
                    break;
                }
                if (j === str2.length - 1) {
                    result = true;
                    break;
                }
            }
            if (result) break;
        }
    }

    console.log(result ? "true" : "false");

}
