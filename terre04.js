/* 
Créez un programme qui permet de déterminer si l’argument donné est un entier pair ou impair..


Exemples d’utilisation :
$> ruby exo.rb 2
pair

$> ruby exo.rb 5
impair


$> ruby exo.rb Bonjour
Tu ne me la mettras pas à l’envers.

$> ruby exo.rb
Tu ne me la mettras pas à l’envers.


Attention : gérez aussi les entiers négatifs.
*/

let arg = process.argv[2];
arg = parseInt(arg);  // Ensure arg is treated as a number, not a string

if ( isNaN(arg) ) {
    console.log("Tu ne me la mettras pas a l'envers");
}

else if (arg % 2 === 0) {
    console.log("pair");
} 

else {
    console.log("impair");
}
