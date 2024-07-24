// These variables are automatically defined in Node.js CommonJS modules
const isMain = require.main === module;


/* 
Créez un programme qui affiche ses arguments reçus à l’envers.


Exemples d’utilisation :
$> python exo.py “Suis” “Je” “Drôle”
Drôle
Je
Suis


$> python exo.py ha ho
ho
ha

$> python exo.py “Bonjour 36”
Bonjour 36

Afficher error et quitter le programme en cas de problèmes d’arguments.


*/ 




/* # FUNCTIONS */
let reverse = () => {
    checkArguments();
    for (let i = args.length >= 2; i !== 1; i--) {
        console.log( args[i] );    
    }
}

/* # Part 1 : ERROR HANDLING */
let checkArguments = function () {
    if (args.length < 3) {
        console.log('Erreur');
        process.exit(1);
    }
}
   

/* # Part 2 : PARSING DATA */
let args = process.argv;




/* # Part 3 : SOLVING */
// Only execute the function if the file is run as a script
let display = () => {
    if (isMain) {
       reverse();
    }
}


/* # Part 4 : DISPLAY */
display();



module.exports = reverse;
