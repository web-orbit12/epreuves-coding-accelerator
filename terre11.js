// These variables are automatically defined in Node.js CommonJS modules
const isMain = require.main === module;



/*
Créez un programme qui transforme une heure affichée en format 24h en une heure affichée en format 12h.


Exemples d’utilisation :
$> ruby exo.rb 23:40
11:40PM

Attention : midi et minuit.

*/

let convertTime = (inputTime) => {

    // Convert the argument to a number
    let arg = inputTime || process.argv[2];

    // Error handling when no argument is provided
    if (arg == undefined) {
        console.log("Please provide a time to convert. Example: 15:30");
        return;
    }

    let hour = arg.slice("0","2");
    hour = Number(hour);

    // we're not converting minutes to numbers to avoid the minutes displaying without zero when supposed to start with it
    let minutes = arg.substring(3); 

    let timeColon = arg.substr("2","1");

    // check time format 
    function checkTimeFormat(arg) {
        if (hour < 0 || hour > 23 || timeColon !== ":" || isNaN(hour) || arg.length !== 5) {
            return false;
        }
        else {
            return minutesCheck();
        }
    }
    
    let minutesCheck = () => {
        let convertedMinutes = Number(minutes);
        if (isNaN(convertedMinutes) || convertedMinutes < 0 || convertedMinutes > 59) {
            return false; // end minutes check
        }
        else {
            return true;
        }
    } 

    // convert time
    if (checkTimeFormat(arg) == false) {
        console.log("Please enter a valid time in the correct format. Example: 15:30");
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


// Only execute the function if the file is run as a script
if (isMain) {
    convertTime(process.argv[2]);
}

module.exports = convertTime;
