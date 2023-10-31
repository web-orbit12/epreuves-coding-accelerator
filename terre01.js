/* 
Créez un programme qui affiche son nom de fichier.


Exemples d’utilisation :
$> node exo.js
exo.js

$> node crevette.js
crevette.js
*/


//let filename = process;  //logged process object first initially to understand the node object

let filePath = process.mainModule.filename; 
fileNameArray = filePath.split("/");
fileName = fileNameArray[fileNameArray.length - 1]

console.log( fileName );
