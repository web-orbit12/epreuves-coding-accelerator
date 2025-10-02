/* 
Prochain nombre premier

Créez un programme qui affiche le premier nombre premier supérieur au nombre donné en argument.


Exemples d’utilisation :
$> python exo.py 14
17
$>

Afficher -1 si le paramètre est négatif ou mauvais.

*/ 


/* # FUNCTIONS */
let findNextPrime = (input) => {
    
    checkArguments(input);


    let isPrime = false;  

    for (let n = input+1; isPrime === false; n++) {
        /*console.log("first loop running");
        console.log("n: " + n);*/

        if (n === 1) continue;

        if (n > 1000000) {
            console.log("Max input value is 1M to avoid long computation time");
            process.exit();
        }

        isPrime = true; 

        for (let i = 2; i <= Math.sqrt(n); i++) {
            /*console.log("Math.sqrt(input): " + Math.sqrt(n));
            console.log("inner loop running");
            console.log("i: " + i);*/
            
            if (n % i === 0) {
                isPrime = false;  // n is not a prime number          
                break;  // break out of the inner loop to avoid unnecessary checks as it's definitely not prime
            }
        }

        if (isPrime) {
            console.log(n);
            return n;
        } 

    }

}


/* # Part 1 : ERROR HANDLING */

let checkArguments = (input) => {
    if (input < 0 || isNaN(input) || !Number.isInteger(input)) {
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
        findNextPrime(input);
    }
}


/* # Part 4 : DISPLAY */
display();
