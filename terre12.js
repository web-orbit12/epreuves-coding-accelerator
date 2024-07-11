// These variables are automatically defined in Node.js CommonJS modules
const isMain = require.main === module;



/*
Créez un programme qui transforme une heure affichée en format 12h en une heure affichée au format 24h.


Exemples d’utilisation :
$> ruby exo.rb 11:40PM
23:40

Attention : midi et minuit.

*/

// Define a function to check if a number is prime
let convertTime = (inputTime) => {

    // Convert the argument to a number
    let arg = inputTime || process.argv[2];

    // Error handling when no argument is provided
    if (arg == undefined) {
        console.log("Please provide a time to convert, followed by AM or PM. Example: 5:30PM");
        return;
    }

    let hour = arg.slice("0","2");
    hour = Number(hour);

    // we're not converting minutes to numbers to avoid the minutes displaying without zero when supposed to start with it
    let minutes = arg.substr("3","2"); 

    let timeColon = arg.substr("2","1");

    let suffix = arg.substring(5);

    // check time format 
    function checkTimeFormat(arg) {
        if (hour < 0 || hour > 23 || timeColon !== ":" || isNaN(hour) || arg.length !== 7 || suffix !== "AM" && suffix !== "PM") {
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
            case hour === 0 && suffix == "AM": // placement of this is important so that <12 doesnt evaluate to true before 
                console.log(`Wrong time format, cannot be 00 and AM at the same time`); 
                break;
            case hour < 12 && suffix == "AM":
                console.log(`Updated time is ${hour}:${minutes}`); 
                break;
            case hour >= 12 && suffix == "PM":
                console.log(`Time already in 24h format: ${hour}:${minutes}`); 
                break;
            case hour > 12 && suffix == "AM":
                console.log(`Wrong time format, cannot be more than 12 and AM at the same time`); 
                break;
            case hour < 12 && suffix == "PM":
                hour += 12;
                console.log(`Updated time is ${hour}:${minutes}`); 
                break;
            case hour === 12 && suffix == "AM":
                hour -= 12;
                console.log(`Updated time is ${hour}:${minutes}`); 
                break;
            default :
                console.log(`Current time is: ${hour}:${minutes}`); 
                break;
        }
    }
}


// Only execute the function if the file is run as a script
if (isMain) {
    convertTime(process.argv[2]);
}

module.exports = convertTime;
