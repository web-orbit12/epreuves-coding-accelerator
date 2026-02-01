// initial variables
const input = process.argv[2]; 
let result = [];

// helper functions
function isLetter( char ) {
    return /^[a-zA-Z]$/.test(char);
}

function isSeparator(string){
    return string.split(/[\s]/); // split by spaces
}

function capitalizeWord(word){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // capitalize first letter and add the rest of the word
}

function validateInput(input) {

    if (process.argv.length !== 3) return false;
    
    if ( !input || !input.trim() ) return false;

    // check if input has at least one letter with regex
    if (!/[a-zA-Z]/.test(input)) return false;

    else return true;
}


// Main logic
if (validateInput(input)) {
    result = isSeparator(input);

    result = result.map(word => capitalizeWord(word));

    result = result.join(" ");
    
    console.log(result);
}

else {
    console.log("error");
    process.exit();
}