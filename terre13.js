// These variables are automatically defined in Node.js CommonJS modules
const isMain = require.main === module;



/*
Trouver la Suisse (lol)

Créez un programme qui prend en paramètre trois entiers et affiche la valeur du milieu.


Exemples d’utilisation :
$> ruby exo.rb 11 40 34
34

$> ruby exo.rb 2 1 3
2

$> ruby exo.rb 2 2 2
erreur.


Fonctions interdites: 
-La fonction sort


*/


let compareNumbers = (a, b, c) => {

     // initialize the 3 results
    let largest, middle;

    console.log(a, b, c);
    
    // Error handling when no argument is provided
    if ( a == undefined || b == undefined || c == undefined) {
        console.log("Please 3 numbers for comparison");
        return;
    }

    // Convert inputs to numbers
    a = Number(a);
    b = Number(b);
    c = Number(c);

    
    if (a === b && a === c) {
        console.log("erreur.");
        return;
    }

    if (a > b) {
        if (a > c) {
            largest = a;  
            b > c ? middle = b : middle = c;
        }
        else {
            largest = c; middle = a;
        }
    }

    else if (b > a) {
        if (b > c) {
            largest = b; 
            a > c ? middle = a : middle = c;
        }
        else {
            largest = c; middle = b;
        }
    }

    
    console.log(middle);
}


// Only execute the function if the file is run as a script
if (isMain) {
    compareNumbers(process.argv[2],process.argv[3],process.argv[4]);
}

module.exports = compareNumbers;
