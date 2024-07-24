// These variables are automatically defined in Node.js CommonJS modules
const isMain = require.main === module;


/* 
Créez un programme qui affiche toutes les différentes combinaisons possibles de trois chiffres dans l’ordre croissant, dans l’ordre croissant. La répétition est volontaire.


Exemples d’utilisation :
$> python exo.py
012, 013, 014, 015, 016, 017, 018, 019, 023, 024, ... , 789
$>

987 n’est pas là parce que 789 est présent.

020 n’est pas là parce que 0 apparaît deux fois.

021 n’est pas là parce que 012 est présent.

000 n’est pas là parce que cette combinaison ne comporte pas exclusivement des chiffres différents les uns des autres.

*/ 




/* # FUNCTIONS */
let combinations = () => {
    for (i=0; i<10; i++) {   
        for (j=i+1; j<10; j++) {
            for (k=j+1; k<10; k++) {
                loggedNumbers.push(i+""+j+""+k);  // add combination to the array
            } 
        }   
    }    
}

/* # Part 1 : ERROR HANDLING */


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
