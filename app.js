const rnd = require('./randomizers')

prisoner = {'Race': rnd.raceRandomizer(),
            'Class': rnd.classRandomizer(),
            'Alignment': rnd.alignmentRandomizer(),
            'Crime': rnd.crime()
            };

console.log(prisoner);