


// Duration of sentance Unit Tests
const {durationOfSentance} = require('../randomizers');

test('should return prisoners time to be in prison, 1-10 years', () => {
    let duration = 0;
    for (let a = 1; a < 10; a++) {
        duration = durationOfSentance();
        expect(duration).toBeGreaterThan(0);
        expect(duration).toBeLessThan(11);
    }
});


// Prisoner Level Unit Tests
const {prisonerLevel} = require('../randomizers');

test('should return prisoners class level 1-6', () => {
    let level = 0;
    for (let a = 1; a < 10; a++) {
        level = prisonerLevel();
        expect(level).toBeGreaterThan(0);
        expect(level).toBeLessThan(7);
    }
});


// Guilty or Innocent Unit Tests
const {guilty} = require('../randomizers');

test('should return true if guilty, crime = Political Crime', () => {
    global.Math.random = () => 0.1;
    expect(guilty("Political Crime")).toBeTruthy();
});

test('should return false if not guilty, crime = Political Crime', () => {
    global.Math.random = () => 0.5;
    expect(guilty("Political Crime")).toBeFalsy();
});

test('should return false if not guilty, crime = !Political Crime', () => {
    global.Math.random = () => 0.5;
    expect(guilty("Treason")).toBeTruthy();
});

test('should return true if guilty, crime = !Political Crime', () => {
    global.Math.random = () => 0.95;
    expect(guilty("Treason")).toBeFalsy();
});


// Crime Randomizer Unit Tests
const {crimeRandomizer} = require('../randomizers');

test('should return Political Crime when < 11', () => {
    expect(crimeRandomizer(1)).toEqual("Political Crime");
    expect(crimeRandomizer(2)).toEqual("Political Crime");
    expect(crimeRandomizer(3)).toEqual("Political Crime");
    expect(crimeRandomizer(4)).toEqual("Political Crime");
    expect(crimeRandomizer(5)).toEqual("Political Crime");
    expect(crimeRandomizer(6)).toEqual("Political Crime");
    expect(crimeRandomizer(7)).toEqual("Political Crime");
    expect(crimeRandomizer(8)).toEqual("Political Crime");
    expect(crimeRandomizer(9)).toEqual("Political Crime");
    expect(crimeRandomizer(10)).toEqual("Political Crime");
});

test('should return Embezzlement when 11', () => {
    expect(crimeRandomizer(11)).toEqual("Embezzlement");
});

test('should return Fencing Stolen Goods when 12-14', () => {
    expect(crimeRandomizer(12)).toEqual("Fencing Stolen Goods");
    expect(crimeRandomizer(13)).toEqual("Fencing Stolen Goods");
    expect(crimeRandomizer(14)).toEqual("Fencing Stolen Goods");
});

test('should return Forgery when 15', () => {
    expect(crimeRandomizer(15)).toEqual("Forgery");
});

test('should return Counterfeiting when 16-17', () => {
    expect(crimeRandomizer(16)).toEqual("Counterfeiting");
    expect(crimeRandomizer(17)).toEqual("Counterfeiting");
});

test('should return Poaching when 18', () => {
    expect(crimeRandomizer(18)).toEqual("Poaching");
});

test('should return Bribery of a public official when 19-20', () => {
    expect(crimeRandomizer(19)).toEqual("Bribery of a public official");
    expect(crimeRandomizer(20)).toEqual("Bribery of a public official");
});

test('should return Arson when 21-25', () => {
    expect(crimeRandomizer(21)).toEqual("Arson");
    expect(crimeRandomizer(22)).toEqual("Arson");
    expect(crimeRandomizer(23)).toEqual("Arson");
    expect(crimeRandomizer(24)).toEqual("Arson");
    expect(crimeRandomizer(25)).toEqual("Arson");
});

test('should return Extortion when 26', () => {
    expect(crimeRandomizer(26)).toEqual("Extortion");
});

test('should return Kidnapping when 27', () => {
    expect(crimeRandomizer(27)).toEqual("Kidnapping");
});

test('should return Blackmail when 28', () => {
    expect(crimeRandomizer(28)).toEqual("Blackmail");
});

test('should return Armed Robbery when 29-39', () => {
    expect(crimeRandomizer(29)).toEqual("Armed Robbery");
    expect(crimeRandomizer(30)).toEqual("Armed Robbery");
    expect(crimeRandomizer(31)).toEqual("Armed Robbery");
    expect(crimeRandomizer(32)).toEqual("Armed Robbery");
    expect(crimeRandomizer(33)).toEqual("Armed Robbery");
    expect(crimeRandomizer(34)).toEqual("Armed Robbery");
    expect(crimeRandomizer(35)).toEqual("Armed Robbery");
    expect(crimeRandomizer(36)).toEqual("Armed Robbery");
    expect(crimeRandomizer(37)).toEqual("Armed Robbery");
    expect(crimeRandomizer(38)).toEqual("Armed Robbery");
    expect(crimeRandomizer(39)).toEqual("Armed Robbery");
});

test('should return Banditry when 40-55', () => {
    expect(crimeRandomizer(40)).toEqual("Banditry");
    expect(crimeRandomizer(41)).toEqual("Banditry");
    expect(crimeRandomizer(42)).toEqual("Banditry");
    expect(crimeRandomizer(43)).toEqual("Banditry");
    expect(crimeRandomizer(44)).toEqual("Banditry");
    expect(crimeRandomizer(45)).toEqual("Banditry");
    expect(crimeRandomizer(46)).toEqual("Banditry");
    expect(crimeRandomizer(47)).toEqual("Banditry");
    expect(crimeRandomizer(48)).toEqual("Banditry");
    expect(crimeRandomizer(49)).toEqual("Banditry");
    expect(crimeRandomizer(50)).toEqual("Banditry");
    expect(crimeRandomizer(51)).toEqual("Banditry");
    expect(crimeRandomizer(52)).toEqual("Banditry");
    expect(crimeRandomizer(53)).toEqual("Banditry");
    expect(crimeRandomizer(54)).toEqual("Banditry");
    expect(crimeRandomizer(55)).toEqual("Banditry");
});

test('should return Burglary when 56-60', () => {
    expect(crimeRandomizer(56)).toEqual("Burglary");
    expect(crimeRandomizer(57)).toEqual("Burglary");
    expect(crimeRandomizer(58)).toEqual("Burglary");
    expect(crimeRandomizer(59)).toEqual("Burglary");
    expect(crimeRandomizer(60)).toEqual("Burglary");
});

test('should return Pickpocketing when 61-65', () => {
    expect(crimeRandomizer(61)).toEqual("Pickpocketing");
    expect(crimeRandomizer(62)).toEqual("Pickpocketing");
    expect(crimeRandomizer(63)).toEqual("Pickpocketing");
    expect(crimeRandomizer(64)).toEqual("Pickpocketing");
    expect(crimeRandomizer(65)).toEqual("Pickpocketing");
});

test('should return Cattle Rustling when 66-68', () => {
    expect(crimeRandomizer(66)).toEqual("Cattle Rustling");
    expect(crimeRandomizer(67)).toEqual("Cattle Rustling");
    expect(crimeRandomizer(68)).toEqual("Cattle Rustling");
});

test('should return Murder when 69-72', () => {
    expect(crimeRandomizer(69)).toEqual("Murder");
    expect(crimeRandomizer(70)).toEqual("Murder");
    expect(crimeRandomizer(71)).toEqual("Murder");
    expect(crimeRandomizer(72)).toEqual("Murder");
});

test('should return Rioting when 73-78', () => {
    expect(crimeRandomizer(73)).toEqual("Rioting");
    expect(crimeRandomizer(74)).toEqual("Rioting");
    expect(crimeRandomizer(75)).toEqual("Rioting");
    expect(crimeRandomizer(76)).toEqual("Rioting");
    expect(crimeRandomizer(77)).toEqual("Rioting");
    expect(crimeRandomizer(78)).toEqual("Rioting");
});

test('should return Assault when 79-83', () => {
    expect(crimeRandomizer(79)).toEqual("Assault");
    expect(crimeRandomizer(80)).toEqual("Assault");
    expect(crimeRandomizer(81)).toEqual("Assault");
    expect(crimeRandomizer(82)).toEqual("Assault");
    expect(crimeRandomizer(83)).toEqual("Assault");
});

test('should return Treason when 84-85', () => {
    expect(crimeRandomizer(84)).toEqual("Treason");
    expect(crimeRandomizer(85)).toEqual("Treason");
});


// Test returning multiple offenses 
const {crime} = require('../randomizers');

test('should return 1 offence', () => {
    global.Math.random = () => 0.50;
    expect(crime().length).toEqual(1);
});

test('should return multiple offences', () => {
    global.Math.random = () => 0.95;
    expect(crime().length).toBeGreaterThan(1);
    global.Math.random = () => 0.98;
    expect(crime().length).toBeGreaterThan(1);
});


// Test assigning a random alignment
const {alignmentRandomizer} = require('../randomizers');

test('should return Lawful Evil 1-10', () => {
    global.Math.random = () => 0.00;
    expect(alignmentRandomizer()).toBe("Lawful Evil");
    global.Math.random = () => 0.01;
    expect(alignmentRandomizer()).toBe("Lawful Evil");
    global.Math.random = () => 0.02;
    expect(alignmentRandomizer()).toBe("Lawful Evil");
    global.Math.random = () => 0.03;
    expect(alignmentRandomizer()).toBe("Lawful Evil");
    global.Math.random = () => 0.04;
    expect(alignmentRandomizer()).toBe("Lawful Evil");
    global.Math.random = () => 0.05;
    expect(alignmentRandomizer()).toBe("Lawful Evil");
    global.Math.random = () => 0.06;
    expect(alignmentRandomizer()).toBe("Lawful Evil");
    global.Math.random = () => 0.07;
    expect(alignmentRandomizer()).toBe("Lawful Evil");
    global.Math.random = () => 0.08;
    expect(alignmentRandomizer()).toBe("Lawful Evil");
    global.Math.random = () => 0.09;
    expect(alignmentRandomizer()).toBe("Lawful Evil");
});

test('should return Neutral Evil when 11-25', () => {
    global.Math.random = () => 0.10;
    expect(alignmentRandomizer()).toEqual("Neutral Evil");
    global.Math.random = () => 0.11;
    expect(alignmentRandomizer()).toEqual("Neutral Evil");
    global.Math.random = () => 0.12;
    expect(alignmentRandomizer()).toEqual("Neutral Evil");
    global.Math.random = () => 0.13;
    expect(alignmentRandomizer()).toEqual("Neutral Evil");
    global.Math.random = () => 0.14;
    expect(alignmentRandomizer()).toEqual("Neutral Evil");
    global.Math.random = () => 0.15;
    expect(alignmentRandomizer()).toEqual("Neutral Evil");
    global.Math.random = () => 0.16;
    expect(alignmentRandomizer()).toEqual("Neutral Evil");
    global.Math.random = () => 0.17;
    expect(alignmentRandomizer()).toEqual("Neutral Evil");
    global.Math.random = () => 0.18;
    expect(alignmentRandomizer()).toEqual("Neutral Evil");
    global.Math.random = () => 0.19;
    expect(alignmentRandomizer()).toEqual("Neutral Evil");
    global.Math.random = () => 0.20;
    expect(alignmentRandomizer()).toEqual("Neutral Evil");
    global.Math.random = () => 0.21;
    expect(alignmentRandomizer()).toEqual("Neutral Evil");
    global.Math.random = () => 0.22;
    expect(alignmentRandomizer()).toEqual("Neutral Evil");
    global.Math.random = () => 0.23;
    expect(alignmentRandomizer()).toEqual("Neutral Evil");
    global.Math.random = () => 0.24;
    expect(alignmentRandomizer()).toEqual("Neutral Evil");
});

test('should return Chaotic Evil when 26-50', () => {
    global.Math.random = () => 0.25;
    expect(alignmentRandomizer()).toEqual("Chaotic Evil");
    global.Math.random = () => 0.26;
    expect(alignmentRandomizer()).toEqual("Chaotic Evil");
    global.Math.random = () => 0.27;
    expect(alignmentRandomizer()).toEqual("Chaotic Evil");
    global.Math.random = () => 0.28;
    expect(alignmentRandomizer()).toEqual("Chaotic Evil");
    global.Math.random = () => 0.29;
    expect(alignmentRandomizer()).toEqual("Chaotic Evil");
    global.Math.random = () => 0.30;
    expect(alignmentRandomizer()).toEqual("Chaotic Evil");
    global.Math.random = () => 0.31;
    expect(alignmentRandomizer()).toEqual("Chaotic Evil");
    global.Math.random = () => 0.32;
    expect(alignmentRandomizer()).toEqual("Chaotic Evil");
    global.Math.random = () => 0.33;
    expect(alignmentRandomizer()).toEqual("Chaotic Evil");
    global.Math.random = () => 0.34;
    expect(alignmentRandomizer()).toEqual("Chaotic Evil");
    global.Math.random = () => 0.35;
    expect(alignmentRandomizer()).toEqual("Chaotic Evil");
    global.Math.random = () => 0.36;
    expect(alignmentRandomizer()).toEqual("Chaotic Evil");
    global.Math.random = () => 0.37;
    expect(alignmentRandomizer()).toEqual("Chaotic Evil");
    global.Math.random = () => 0.38;
    expect(alignmentRandomizer()).toEqual("Chaotic Evil");
    global.Math.random = () => 0.39;
    expect(alignmentRandomizer()).toEqual("Chaotic Evil");
    global.Math.random = () => 0.40;
    expect(alignmentRandomizer()).toEqual("Chaotic Evil");
    global.Math.random = () => 0.41;
    expect(alignmentRandomizer()).toEqual("Chaotic Evil");
    global.Math.random = () => 0.42;
    expect(alignmentRandomizer()).toEqual("Chaotic Evil");
    global.Math.random = () => 0.43;
    expect(alignmentRandomizer()).toEqual("Chaotic Evil");
    global.Math.random = () => 0.44;
    expect(alignmentRandomizer()).toEqual("Chaotic Evil");
    global.Math.random = () => 0.45;
    expect(alignmentRandomizer()).toEqual("Chaotic Evil");
    global.Math.random = () => 0.46;
    expect(alignmentRandomizer()).toEqual("Chaotic Evil");
    global.Math.random = () => 0.47;
    expect(alignmentRandomizer()).toEqual("Chaotic Evil");
    global.Math.random = () => 0.48;
    expect(alignmentRandomizer()).toEqual("Chaotic Evil");
    global.Math.random = () => 0.49;
    expect(alignmentRandomizer()).toEqual("Chaotic Evil");
});

test('should return Lawful Neutral when 51-55', () => {
    global.Math.random = () => 0.50;
    expect(alignmentRandomizer()).toEqual("Lawful Neutral");
    global.Math.random = () => 0.51;
    expect(alignmentRandomizer()).toEqual("Lawful Neutral");
    global.Math.random = () => 0.52;
    expect(alignmentRandomizer()).toEqual("Lawful Neutral");
    global.Math.random = () => 0.53;
    expect(alignmentRandomizer()).toEqual("Lawful Neutral");
    global.Math.random = () => 0.54;
    expect(alignmentRandomizer()).toEqual("Lawful Neutral");
});

test('should return Neutral when 56-65', () => {
    global.Math.random = () => 0.55;
    expect(alignmentRandomizer()).toEqual("Neutral");
    global.Math.random = () => 0.56;
    expect(alignmentRandomizer()).toEqual("Neutral");
    global.Math.random = () => 0.57;
    expect(alignmentRandomizer()).toEqual("Neutral");
    global.Math.random = () => 0.58;
    expect(alignmentRandomizer()).toEqual("Neutral");
    global.Math.random = () => 0.59;
    expect(alignmentRandomizer()).toEqual("Neutral");
    global.Math.random = () => 0.60;
    expect(alignmentRandomizer()).toEqual("Neutral");
    global.Math.random = () => 0.61;
    expect(alignmentRandomizer()).toEqual("Neutral");
    global.Math.random = () => 0.62;
    expect(alignmentRandomizer()).toEqual("Neutral");
    global.Math.random = () => 0.63;
    expect(alignmentRandomizer()).toEqual("Neutral");
    global.Math.random = () => 0.64;
    expect(alignmentRandomizer()).toEqual("Neutral");
});

test('should return Chaotic Neutral when 66-80', () => {
    global.Math.random = () => 0.65;
    expect(alignmentRandomizer()).toEqual("Chaotic Neutral");
    global.Math.random = () => 0.66;
    expect(alignmentRandomizer()).toEqual("Chaotic Neutral");
    global.Math.random = () => 0.67;
    expect(alignmentRandomizer()).toEqual("Chaotic Neutral");
    global.Math.random = () => 0.68;
    expect(alignmentRandomizer()).toEqual("Chaotic Neutral");
    global.Math.random = () => 0.69;
    expect(alignmentRandomizer()).toEqual("Chaotic Neutral");
    global.Math.random = () => 0.70;
    expect(alignmentRandomizer()).toEqual("Chaotic Neutral");
    global.Math.random = () => 0.71;
    expect(alignmentRandomizer()).toEqual("Chaotic Neutral");
    global.Math.random = () => 0.72;
    expect(alignmentRandomizer()).toEqual("Chaotic Neutral");
    global.Math.random = () => 0.73;
    expect(alignmentRandomizer()).toEqual("Chaotic Neutral");
    global.Math.random = () => 0.74;
    expect(alignmentRandomizer()).toEqual("Chaotic Neutral");
    global.Math.random = () => 0.75;
    expect(alignmentRandomizer()).toEqual("Chaotic Neutral");
    global.Math.random = () => 0.76;
    expect(alignmentRandomizer()).toEqual("Chaotic Neutral");
    global.Math.random = () => 0.77;
    expect(alignmentRandomizer()).toEqual("Chaotic Neutral");
    global.Math.random = () => 0.78;
    expect(alignmentRandomizer()).toEqual("Chaotic Neutral");
    global.Math.random = () => 0.79;
    expect(alignmentRandomizer()).toEqual("Chaotic Neutral");
});

test('should return Lawful good when 81-85', () => {
    global.Math.random = () => 0.80;
    expect(alignmentRandomizer()).toEqual("Lawful good");
    global.Math.random = () => 0.81;
    expect(alignmentRandomizer()).toEqual("Lawful good");
    global.Math.random = () => 0.82;
    expect(alignmentRandomizer()).toEqual("Lawful good");
    global.Math.random = () => 0.83;
    expect(alignmentRandomizer()).toEqual("Lawful good");
    global.Math.random = () => 0.84;
    expect(alignmentRandomizer()).toEqual("Lawful good");
});

test('should return Neutral Good when 86-90', () => {
    global.Math.random = () => 0.85;
    expect(alignmentRandomizer()).toEqual("Neutral Good");
    global.Math.random = () => 0.86;
    expect(alignmentRandomizer()).toEqual("Neutral Good");
    global.Math.random = () => 0.87;
    expect(alignmentRandomizer()).toEqual("Neutral Good");
    global.Math.random = () => 0.88;
    expect(alignmentRandomizer()).toEqual("Neutral Good");
    global.Math.random = () => 0.89;
    expect(alignmentRandomizer()).toEqual("Neutral Good");
});

test('should return Chaotic Good when 91-100', () => {
    global.Math.random = () => 0.90;
    expect(alignmentRandomizer()).toEqual("Chaotic Good");
    global.Math.random = () => 0.91;
    expect(alignmentRandomizer()).toEqual("Chaotic Good");
    global.Math.random = () => 0.92;
    expect(alignmentRandomizer()).toEqual("Chaotic Good");
    global.Math.random = () => 0.93;
    expect(alignmentRandomizer()).toEqual("Chaotic Good");
    global.Math.random = () => 0.94;
    expect(alignmentRandomizer()).toEqual("Chaotic Good");
    global.Math.random = () => 0.95;
    expect(alignmentRandomizer()).toEqual("Chaotic Good");
    global.Math.random = () => 0.96;
    expect(alignmentRandomizer()).toEqual("Chaotic Good");
    global.Math.random = () => 0.97;
    expect(alignmentRandomizer()).toEqual("Chaotic Good");
    global.Math.random = () => 0.98;
    expect(alignmentRandomizer()).toEqual("Chaotic Good");
    global.Math.random = () => 0.99;
    expect(alignmentRandomizer()).toEqual("Chaotic Good");
});


// Test for random class
const {classRandomizer} = require('../randomizers');

test('should return Citizen when 1-30', () => {
    global.Math.random = () => 0.00;
    expect(classRandomizer()).toEqual("Citizen");
    global.Math.random = () => 0.01;
    expect(classRandomizer()).toEqual("Citizen");
    global.Math.random = () => 0.02;
    expect(classRandomizer()).toEqual("Citizen");
    global.Math.random = () => 0.03;
    expect(classRandomizer()).toEqual("Citizen");
    global.Math.random = () => 0.04;
    expect(classRandomizer()).toEqual("Citizen");
    global.Math.random = () => 0.05;
    expect(classRandomizer()).toEqual("Citizen");
    global.Math.random = () => 0.06;
    expect(classRandomizer()).toEqual("Citizen");
    global.Math.random = () => 0.07;
    expect(classRandomizer()).toEqual("Citizen");
    global.Math.random = () => 0.08;
    expect(classRandomizer()).toEqual("Citizen");
    global.Math.random = () => 0.09;
    expect(classRandomizer()).toEqual("Citizen");
    global.Math.random = () => 0.1;
    expect(classRandomizer()).toEqual("Citizen");
    global.Math.random = () => 0.11;
    expect(classRandomizer()).toEqual("Citizen");
    global.Math.random = () => 0.12;
    expect(classRandomizer()).toEqual("Citizen");
    global.Math.random = () => 0.13;
    expect(classRandomizer()).toEqual("Citizen");
    global.Math.random = () => 0.14;
    expect(classRandomizer()).toEqual("Citizen");
    global.Math.random = () => 0.15;
    expect(classRandomizer()).toEqual("Citizen");
    global.Math.random = () => 0.16;
    expect(classRandomizer()).toEqual("Citizen");
    global.Math.random = () => 0.17;
    expect(classRandomizer()).toEqual("Citizen");
    global.Math.random = () => 0.18;
    expect(classRandomizer()).toEqual("Citizen");
    global.Math.random = () => 0.19;
    expect(classRandomizer()).toEqual("Citizen");
    global.Math.random = () => 0.2;
    expect(classRandomizer()).toEqual("Citizen");
    global.Math.random = () => 0.21;
    expect(classRandomizer()).toEqual("Citizen");
    global.Math.random = () => 0.22;
    expect(classRandomizer()).toEqual("Citizen");
    global.Math.random = () => 0.23;
    expect(classRandomizer()).toEqual("Citizen");
    global.Math.random = () => 0.24;
    expect(classRandomizer()).toEqual("Citizen");
    global.Math.random = () => 0.25;
    expect(classRandomizer()).toEqual("Citizen");
    global.Math.random = () => 0.26;
    expect(classRandomizer()).toEqual("Citizen");
    global.Math.random = () => 0.27;
    expect(classRandomizer()).toEqual("Citizen");
    global.Math.random = () => 0.28;
    expect(classRandomizer()).toEqual("Citizen");
    global.Math.random = () => 0.29;
    expect(classRandomizer()).toEqual("Citizen");
});

test('should return Druid when 31', () => {
    global.Math.random = () => 0.3;
    expect(classRandomizer()).toEqual("Druid");
});

test('should return Fighter when 32-42', () => {
    global.Math.random = () => 0.31;
    expect(classRandomizer()).toEqual("Fighter");
    global.Math.random = () => 0.32;
    expect(classRandomizer()).toEqual("Fighter");
    global.Math.random = () => 0.33;
    expect(classRandomizer()).toEqual("Fighter");
    global.Math.random = () => 0.34;
    expect(classRandomizer()).toEqual("Fighter");
    global.Math.random = () => 0.35;
    expect(classRandomizer()).toEqual("Fighter");
    global.Math.random = () => 0.36;
    expect(classRandomizer()).toEqual("Fighter");
    global.Math.random = () => 0.37;
    expect(classRandomizer()).toEqual("Fighter");
    global.Math.random = () => 0.38;
    expect(classRandomizer()).toEqual("Fighter");
    global.Math.random = () => 0.39;
    expect(classRandomizer()).toEqual("Fighter");
    global.Math.random = () => 0.4;
    expect(classRandomizer()).toEqual("Fighter");
    global.Math.random = () => 0.41;
    expect(classRandomizer()).toEqual("Fighter");
});

test('should return Merchant when 43-50', () => {
    global.Math.random = () => 0.42;
    expect(classRandomizer()).toEqual("Merchant");
    global.Math.random = () => 0.43;
    expect(classRandomizer()).toEqual("Merchant");
    global.Math.random = () => 0.44;
    expect(classRandomizer()).toEqual("Merchant");
    global.Math.random = () => 0.45;
    expect(classRandomizer()).toEqual("Merchant");
    global.Math.random = () => 0.46;
    expect(classRandomizer()).toEqual("Merchant");
    global.Math.random = () => 0.47;
    expect(classRandomizer()).toEqual("Merchant");
    global.Math.random = () => 0.48;
    expect(classRandomizer()).toEqual("Merchant");
    global.Math.random = () => 0.49;
    expect(classRandomizer()).toEqual("Merchant");

});

test('should return Wizard when 51-57', () => {
    global.Math.random = () => 0.5;
    expect(classRandomizer()).toEqual("Wizard");
    global.Math.random = () => 0.51;
    expect(classRandomizer()).toEqual("Wizard");
    global.Math.random = () => 0.52;
    expect(classRandomizer()).toEqual("Wizard");
    global.Math.random = () => 0.53;
    expect(classRandomizer()).toEqual("Wizard");
    global.Math.random = () => 0.54;
    expect(classRandomizer()).toEqual("Wizard");
    global.Math.random = () => 0.55;
    expect(classRandomizer()).toEqual("Wizard");
    global.Math.random = () => 0.56;
    expect(classRandomizer()).toEqual("Wizard");
});

test('should return Sorcerer when 58-60', () => {
    global.Math.random = () => 0.57;
    expect(classRandomizer()).toEqual("Sorcerer");
    global.Math.random = () => 0.58;
    expect(classRandomizer()).toEqual("Sorcerer");
    global.Math.random = () => 0.59;
    expect(classRandomizer()).toEqual("Sorcerer");
});

test('should return Cleric when 61-65', () => {
    global.Math.random = () => 0.6;
    expect(classRandomizer()).toEqual("Cleric");
    global.Math.random = () => 0.61;
    expect(classRandomizer()).toEqual("Cleric");
    global.Math.random = () => 0.62;
    expect(classRandomizer()).toEqual("Cleric");
    global.Math.random = () => 0.63;
    expect(classRandomizer()).toEqual("Cleric");
    global.Math.random = () => 0.64;
    expect(classRandomizer()).toEqual("Cleric");
});

test('should return Ranger when 66', () => {
    global.Math.random = () => 0.65;
    expect(classRandomizer()).toEqual("Ranger");
});

test('should return Rogue when 67-100', () => {
    global.Math.random = () => 0.66;
    expect(classRandomizer()).toEqual("Rogue");
    global.Math.random = () => 0.67;
    expect(classRandomizer()).toEqual("Rogue");
    global.Math.random = () => 0.68;
    expect(classRandomizer()).toEqual("Rogue");
    global.Math.random = () => 0.69;
    expect(classRandomizer()).toEqual("Rogue");
    global.Math.random = () => 0.70;
    expect(classRandomizer()).toEqual("Rogue");
    global.Math.random = () => 0.71;
    expect(classRandomizer()).toEqual("Rogue");
    global.Math.random = () => 0.72;
    expect(classRandomizer()).toEqual("Rogue");
    global.Math.random = () => 0.73;
    expect(classRandomizer()).toEqual("Rogue");
    global.Math.random = () => 0.74;
    expect(classRandomizer()).toEqual("Rogue");
    global.Math.random = () => 0.75;
    expect(classRandomizer()).toEqual("Rogue");
    global.Math.random = () => 0.76;
    expect(classRandomizer()).toEqual("Rogue");
    global.Math.random = () => 0.77;
    expect(classRandomizer()).toEqual("Rogue");
    global.Math.random = () => 0.78;
    expect(classRandomizer()).toEqual("Rogue");
    global.Math.random = () => 0.79;
    expect(classRandomizer()).toEqual("Rogue");
    global.Math.random = () => 0.80;
    expect(classRandomizer()).toEqual("Rogue");
    global.Math.random = () => 0.81;
    expect(classRandomizer()).toEqual("Rogue");
    global.Math.random = () => 0.82;
    expect(classRandomizer()).toEqual("Rogue");
    global.Math.random = () => 0.83;
    expect(classRandomizer()).toEqual("Rogue");
    global.Math.random = () => 0.84;
    expect(classRandomizer()).toEqual("Rogue");
    global.Math.random = () => 0.85;
    expect(classRandomizer()).toEqual("Rogue");
    global.Math.random = () => 0.86;
    expect(classRandomizer()).toEqual("Rogue");
    global.Math.random = () => 0.87;
    expect(classRandomizer()).toEqual("Rogue");
    global.Math.random = () => 0.88;
    expect(classRandomizer()).toEqual("Rogue");
    global.Math.random = () => 0.89;
    expect(classRandomizer()).toEqual("Rogue");
    global.Math.random = () => 0.90;
    expect(classRandomizer()).toEqual("Rogue");
    global.Math.random = () => 0.91;
    expect(classRandomizer()).toEqual("Rogue");
    global.Math.random = () => 0.92;
    expect(classRandomizer()).toEqual("Rogue");
    global.Math.random = () => 0.93;
    expect(classRandomizer()).toEqual("Rogue");
    global.Math.random = () => 0.94;
    expect(classRandomizer()).toEqual("Rogue");
    global.Math.random = () => 0.95;
    expect(classRandomizer()).toEqual("Rogue");
    global.Math.random = () => 0.96;
    expect(classRandomizer()).toEqual("Rogue");
    global.Math.random = () => 0.97;
    expect(classRandomizer()).toEqual("Rogue");
    global.Math.random = () => 0.98;
    expect(classRandomizer()).toEqual("Rogue");
    global.Math.random = () => 0.99;
    expect(classRandomizer()).toEqual("Rogue");
});


// test('should return Burglary when 56-60', () => {
//     global.Math.random = () => 0.27;
//     expect(crimeRandomizer()).toEqual("Burglary");
// });