/* 
Créez un programme qui affiche les arguments qu’il reçoit ligne par ligne, peu importe le nombre d’arguments.


Exemples d’utilisation :
$> ruby exo.rb je suis solide !
je
suis
solide
!

*/

let args = process.argv;

for (let i = 2; i < args.length; i++) {
    console.log( args[i] );    
}