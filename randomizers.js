

// Roll D?
function rollDice(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The min and max numbers are inclusive
};

// Race Randomizer
function raceRandomizer() {
    diceValue = rollDice(1, 100);
    if (diceValue < 75) {
        return ("Human");
    } else if (diceValue < 79) {
        return ("Elf");
    } else if (diceValue < 82) {
        return ("Halfling");
    } else if (diceValue < 88) {
        return ("Dwarf");
    } else if (diceValue < 91) {
        return ("Gnome");
    } else if (diceValue < 96) {
        return ("Half-Orc");
    } else {
        return ("Half-Elf");
    };
};

// Class Randomizer
function classRandomizer() {
    diceValue = rollDice(1, 100);
    if (diceValue <= 30) {
        return ("Citizen");
    } else if (diceValue == 31) {
        return ("Druid");
    } else if (diceValue <= 42) {
        return ("Fighter");
    } else if (diceValue <= 50) {
        return ("Merchant");
    } else if (diceValue <= 57) {
        return ("Wizard");
    } else if (diceValue <= 60) {
        return ("Sorcerer");
    } else if (diceValue <= 65) {
        return ("Cleric");
    } else if (diceValue == 66) {
        return ("Ranger");
    } else {
        return ("Rogue");
    };
};

// Alignment Randomizer
function alignmentRandomizer() {
    diceValue = rollDice(1, 100);
    if (diceValue <= 10) {
        return ("Lawful Evil");
    } else if (diceValue <= 25) {
        return ("Neutral Evil");
    } else if (diceValue <= 50) {
        return ("Chaotic Evil");
    } else if (diceValue <= 55) {
        return ("Lawful Neutral");
    } else if (diceValue <= 65) {
        return ("Neutral");
    } else if (diceValue <= 80) {
        return ("Chaotic Neutral");
    } else if (diceValue <= 85) {
        return ("Lawful good");
    } else if (diceValue <= 90) {
        return ("Neutral Good");
    } else {
        return ("Chaotic Good");
    };
};

// Crime Randomizer
function crime() {
    crimes = [];
    iter = 1;
    diceValue = rollDice(1, 100);
    if (diceValue < 93) {
        iter = 1;
    } else if (diceValue < 97) {
        iter += rollDice(1, 4);
    } else {
        iter += rollDice(1, 6);
    };

    for (i=0; i < iter; i++) {
        crimes.push(crimeRandomizer(rollDice(1, 85)));
    };
    return (crimes)
};

function crimeRandomizer(diceValue) {
    if (diceValue < 11) {
        return ("Political Crime")
    } else if (diceValue == 11) {
        return ("Embezzlement");
    } else if (diceValue < 15) {
        return ("Fencing Stolen Goods");   
    } else if (diceValue == 15) {
        return ("Forgery");   
    } else if (diceValue < 18) {
        return ("Counterfeiting");   
    } else if (diceValue == 18) {
        return ("Poaching");
    } else if (diceValue < 21) {
        return ("Bribery of a public official");   
    } else if (diceValue < 26) {
        return ("Arson");
    } else if (diceValue == 26) {
        return ("Extortion");
    } else if (diceValue == 27) {
        return ("Kidnapping");
    } else if (diceValue == 28) {
        return ("Blackmail");
    } else if (diceValue < 40) {
        return ("Armed Robbery");
    } else if (diceValue < 56) {
        return ("Banditry");
    } else if (diceValue < 61) {
        return ("Burglary");
    } else if (diceValue < 66) {
        return ("Pickpocketing");
    } else if (diceValue < 69) {
        return ("Cattle Rustling");
    } else if (diceValue < 73) {
        return ("Murder");
    } else if (diceValue < 79) {
        return ("Rioting");
    } else if (diceValue < 84) {
        return ("Assault");
    } else if (diceValue < 86) {
        return ("Treason");
    };
};

// Innocence or Guilty Randomizer
function guilty(crime) {
    diceValue = rollDice(1, 100);
    if (crime == "Political Crime") {
        if (diceValue < 26) {
            return (true);
        } else {
            return (false);
        }
    } else {
        if (diceValue < 91) {
            return (true);
        } else {
            return (false);
        }
    };
};

// Duration of sentance
function durationOfSentance() {
    return (rollDice(1, 10));
};

// Level
function prisonerLevel() {
    return (rollDice(1, 6));
};


// make functions available to other js files
module.exports = {
    raceRandomizer,
    classRandomizer,
    alignmentRandomizer,
    crimeRandomizer,
    guilty,
    durationOfSentance,
    prisonerLevel,
    crime
}