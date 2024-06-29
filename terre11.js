/*
Créez un programme qui transforme une heure affichée en format 24h en une heure affichée en format 12h.


Exemples d’utilisation :
$> ruby exo.rb 23:40
11:40PM

Attention : midi et minuit.

*/

// Convert the argument to a number
let arg = process.argv[2];

let hour = arg.slice("0","2");
hour = Number(hour);

let minutes = arg.substring("3");
minutes = Number(minutes);

let timeColon = arg.substr("2","1");

// check time format 
function checkTimeFormat(arg) {
    if (hour < 0 || hour > 23 || timeColon !== ":" || isNaN(hour) || arg.length !== 5) {
        return false;
    }    
    else {
        return true;
    }
}


// Define a function to check if a number is prime
let convertTime = (arg) => {

    if (checkTimeFormat(arg) == false) {
        console.log("Please enter a time in the correct format. Example: 15:30");
        return;
    }
    else {
        switch (true) {
            case hour > 12 :
                hour -= 12;
                console.log(`Updated time is ${hour}:${minutes}PM`); 
                break;
            case hour === 0 :
                hour = 12;
                console.log(`Updated time is ${hour}:${minutes}AM`); 
                break;
            case hour === 12 :
                console.log(`Time not updated, already: ${hour}:${minutes}PM`); 
                break;
            default :
                console.log(`Current time is: ${hour}:${minutes}AM`); 
                break;
        }
    }
    
}


// Call the function with the argument
convertTime(arg);

