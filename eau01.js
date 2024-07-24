// These variables are automatically defined in Node.js CommonJS modules
const isMain = require.main === module;


/* 
Créez un programme qui affiche toutes les différentes combinaisons de deux nombre entre 00 et 99 dans l’ordre croissant.


Exemples d’utilisation :
$> python exo.py
00 01, 00 02, 00 03, 00 04, ... , 00 99, 01 02, ... , 97 99, 98 99
$>


*/ 




/* # FUNCTIONS */
let combinations = () => {
    for (let i=0; i<99; i++) {   
        for (let j=i+1; j<100; j++) {
                loggedNumbers.push(`${formatNumber(i)} ${formatNumber(j)}`); // add combination to the array
        }   
    }    
}

/* # Part 1 : ERROR HANDLING */
let formatNumber = (x) => {
    return (x < 10) ?  `0${x}` : `${x}`;
}
   


/* # Part 2 : PARSING DATA */
let loggedNumbers = [];

/* # Part 3 : SOLVING */
// Only execute the function if the file is run as a script
let display = () => {
    if (isMain) {
        combinations();
        console.log("Combinations logged: ", loggedNumbers.join(",") );  // display the array of combinations
    }
}


/* # Part 4 : DISPLAY */
display();



module.exports = combinations;
