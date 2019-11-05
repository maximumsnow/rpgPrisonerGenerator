const rnd = require('./randomizers')

prisoner = {'Race': rnd.raceRandomizer(),
            'Class': rnd.classRandomizer(),
            'Level': rnd.prisonerLevel(),
            'Alignment': rnd.alignmentRandomizer(),
            'Crime': rnd.crime(),
            'Years:': rnd.durationOfSentance(),
            'Cell': 123
            };

prisoner.Guilty = rnd.guilty(prisoner.Crime);

console.log(prisoner);