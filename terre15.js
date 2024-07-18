// These variables are automatically defined in Node.js CommonJS modules
const isMain = require.main === module;



/*
Créez un programme qui célèbre votre victoire.


Exemples d’utilisation :
$> ruby exo.rb
J’ai terminé l’Épreuve de la Terre et c’était [].
$>

Note : [] est à remplacer par un adjectif de votre choix (facile ?)



*/


/* # FUNCTIONS */
let celebration = (adjectif) => {
    checkValidInput(adjectif);
    console.log('J’ai terminé l’Épreuve de la Terre et c’était ' + adjectif + '.');
}

/* # Part 1 : ERROR HANDLING */
let checkValidInput = (adjectif) => {
    if (process.argv[3]) {
        console.log('Invalid data, please enter a one word adjective');
    }
    else if (adjectif == undefined || adjectif == null) {
        console.log('Please enter at least a valid adjective');
        process.exit(1);
    }
}

/* # Part 2 : PARSING DATA */
let adjectif  = process.argv[2];

/* # Part 3 : SOLVING */
// Only execute the function if the file is run as a script
if (isMain) {
    celebration(adjectif);
}


/* # Part 4 : DISPLAY */




module.exports = celebration;
