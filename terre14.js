// These variables are automatically defined in Node.js CommonJS modules
const isMain = require.main === module;



/*
Créez un programme qui détermine si une liste d’entiers est triée ou pas.


Exemples d’utilisation :
$> ruby exo.rb 9 8 3
Pas triée !

$> ruby exo.rb 3 8 9 12
Triée !

$> ruby exo.rb “Salut”
erreur.


Fonctions interdites: 
-La fonction sort


*/


/* # FUNCTIONS */
let checkSorting = (numbers) => {
    console.log('Number of arguments:', numbers.length);

    let flag = false;
    numbers.forEach((number, index) => {

        // Convert the current number to a numerical value
        number = Number(number);

        checkValidInput(number);
        
        if (number > numbers[index + 1]) {           
            flag = true;
            //console.log("flag set to true");
            //console.log(number +">"+ numbers[index + 1]);
        } 
        if (index === numbers.length - 1) {     
            if (flag) { 
                console.log("Pas triée !");
            }
            else {
                console.log("Triée!");
            }
        }
    });
}

/* # Part 1 : ERROR HANDLING */
let checkValidInput = (number) => {
    if (isNaN(number)) {
        console.log('Invalid data, please enter numbers');
        process.exit(1);
    }
    else if (!number && number !== 0) {
        console.log('Please enter at least a valid number');
        process.exit(1);
    }
}

/* # Part 2 : PARSING DATA */
let numbers  = process.argv.slice(2);
console.log(numbers);

/* # Part 3 : SOLVING */
// Only execute the function if the file is run as a script
if (isMain) {
    checkSorting(numbers);
}


/* # Part 4 : DISPLAY */




module.exports = checkSorting;
