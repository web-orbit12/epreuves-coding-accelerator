// These variables are automatically defined in Node.js CommonJS modules
const isMain = require.main === module;


/* 
Créez un programme qui affiche le N-ème élément de la célèbre suite de Fibonacci. (0, 1, 1, 2) étant le début de la suite et le premier élément étant à l’index 0.


Exemples d’utilisation :
$> python exo.py 3
2
$>

Afficher -1 si le paramètre est négatif ou mauvais.


*/ 




/* # FUNCTIONS */
let runFibSequence = (input) => {

    
    checkArguments(input);

    let a = 0, b = 1, c = 0;


    for (let i = 0; i <= input; i++) {
        // check position
        if (input == 0) {
            console.log(c);
        }
        else if (i > 0) {
            c = a + b; // Compute the next number in the sequence

            if (i == input) {
                // console.log("Fib number: " + c + " at index: " + i);
                console.log(c);
            }
        }    
        
        a = b;
        b = c;  // update the variables for the next iteration

    }
}


/* # Part 1 : ERROR HANDLING */

let checkArguments = (input) => {
    if (input < 0 || isNaN(input)) {
        console.log("-1");
        process.exit(); // end the loop when the input is negative or not a number
    }   
}




/* # Part 2 : PARSING DATA */
let input = Number(process.argv[2]);




/* # Part 3 : SOLVING */
// Only execute the function if the file is run as a script
let display = () => {
    if (isMain) {
        runFibSequence(input);
    }
}


/* # Part 4 : DISPLAY */
display();



module.exports = runFibSequence;
