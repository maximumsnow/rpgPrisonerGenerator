


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
const {multipleOffense} = require('../randomizers');

test('should return Political Crime when < 11', () => {
    global.Math.random = () => 0.00;
    expect(crimeRandomizer()).toEqual("Political Crime");
    global.Math.random = () => 0.01;
    expect(crimeRandomizer()).toEqual("Political Crime");
    global.Math.random = () => 0.02;
    expect(crimeRandomizer()).toEqual("Political Crime");
    global.Math.random = () => 0.03;
    expect(crimeRandomizer()).toEqual("Political Crime");
    global.Math.random = () => 0.04;
    expect(crimeRandomizer()).toEqual("Political Crime");
    global.Math.random = () => 0.05;
    expect(crimeRandomizer()).toEqual("Political Crime");
    global.Math.random = () => 0.06;
    expect(crimeRandomizer()).toEqual("Political Crime");
    global.Math.random = () => 0.07;
    expect(crimeRandomizer()).toEqual("Political Crime");
    global.Math.random = () => 0.08;
    expect(crimeRandomizer()).toEqual("Political Crime");
    global.Math.random = () => 0.09;
    expect(crimeRandomizer()).toEqual("Political Crime");
});

test('should return Embezzlement when 11', () => {
    global.Math.random = () => 0.10;
    expect(crimeRandomizer()).toEqual("Embezzlement");
});

test('should return Fencing Stolen Goods when 12-14', () => {
    global.Math.random = () => 0.11;
    expect(crimeRandomizer()).toEqual("Fencing Stolen Goods");
    global.Math.random = () => 0.12;
    expect(crimeRandomizer()).toEqual("Fencing Stolen Goods");
    global.Math.random = () => 0.13;
    expect(crimeRandomizer()).toEqual("Fencing Stolen Goods");
});

test('should return Forgery when 15', () => {
    global.Math.random = () => 0.14;
    expect(crimeRandomizer()).toEqual("Forgery");
});

test('should return Counterfeiting when 16-17', () => {
    global.Math.random = () => 0.15;
    expect(crimeRandomizer()).toEqual("Counterfeiting");
    global.Math.random = () => 0.16;
    expect(crimeRandomizer()).toEqual("Counterfeiting");
});

test('should return Poaching when 18', () => {
    global.Math.random = () => 0.17;
    expect(crimeRandomizer()).toEqual("Poaching");
});

test('should return Bribery of a public official when 19-20', () => {
    global.Math.random = () => 0.18;
    expect(crimeRandomizer()).toEqual("Bribery of a public official");
    global.Math.random = () => 0.19;
    expect(crimeRandomizer()).toEqual("Bribery of a public official");
});

test('should return Arson when 21-25', () => {
    global.Math.random = () => 0.20;
    expect(crimeRandomizer()).toEqual("Arson");
    global.Math.random = () => 0.21;
    expect(crimeRandomizer()).toEqual("Arson");
    global.Math.random = () => 0.22;
    expect(crimeRandomizer()).toEqual("Arson");
    global.Math.random = () => 0.23;
    expect(crimeRandomizer()).toEqual("Arson");
    global.Math.random = () => 0.24;
    expect(crimeRandomizer()).toEqual("Arson");
});

test('should return Extortion when 26', () => {
    global.Math.random = () => 0.25;
    expect(crimeRandomizer()).toEqual("Extortion");
});

test('should return Kidnapping when 27', () => {
    global.Math.random = () => 0.26;
    expect(crimeRandomizer()).toEqual("Kidnapping");
});

test('should return Blackmail when 28', () => {
    global.Math.random = () => 0.27;
    expect(crimeRandomizer()).toEqual("Blackmail");
});

test('should return Armed Robbery when 29-39', () => {
    global.Math.random = () => 0.28;
    expect(crimeRandomizer()).toEqual("Armed Robbery");
    global.Math.random = () => 0.29;
    expect(crimeRandomizer()).toEqual("Armed Robbery");
    global.Math.random = () => 0.30;
    expect(crimeRandomizer()).toEqual("Armed Robbery");
    global.Math.random = () => 0.31;
    expect(crimeRandomizer()).toEqual("Armed Robbery");
    global.Math.random = () => 0.32;
    expect(crimeRandomizer()).toEqual("Armed Robbery");
    global.Math.random = () => 0.33;
    expect(crimeRandomizer()).toEqual("Armed Robbery");
    global.Math.random = () => 0.34;
    expect(crimeRandomizer()).toEqual("Armed Robbery");
    global.Math.random = () => 0.35;
    expect(crimeRandomizer()).toEqual("Armed Robbery");
    global.Math.random = () => 0.36;
    expect(crimeRandomizer()).toEqual("Armed Robbery");
    global.Math.random = () => 0.37;
    expect(crimeRandomizer()).toEqual("Armed Robbery");
    global.Math.random = () => 0.38;
    expect(crimeRandomizer()).toEqual("Armed Robbery");
});

test('should return Banditry when 40-55', () => {
    global.Math.random = () => 0.39;
    expect(crimeRandomizer()).toEqual("Banditry");
    global.Math.random = () => 0.40;
    expect(crimeRandomizer()).toEqual("Banditry");
    global.Math.random = () => 0.41;
    expect(crimeRandomizer()).toEqual("Banditry");
    global.Math.random = () => 0.42;
    expect(crimeRandomizer()).toEqual("Banditry");
    global.Math.random = () => 0.43;
    expect(crimeRandomizer()).toEqual("Banditry");
    global.Math.random = () => 0.44;
    expect(crimeRandomizer()).toEqual("Banditry");
    global.Math.random = () => 0.45;
    expect(crimeRandomizer()).toEqual("Banditry");
    global.Math.random = () => 0.46;
    expect(crimeRandomizer()).toEqual("Banditry");
    global.Math.random = () => 0.47;
    expect(crimeRandomizer()).toEqual("Banditry");
    global.Math.random = () => 0.48;
    expect(crimeRandomizer()).toEqual("Banditry");
    global.Math.random = () => 0.49;
    expect(crimeRandomizer()).toEqual("Banditry");
    global.Math.random = () => 0.50;
    expect(crimeRandomizer()).toEqual("Banditry");
    global.Math.random = () => 0.51;
    expect(crimeRandomizer()).toEqual("Banditry");
    global.Math.random = () => 0.52;
    expect(crimeRandomizer()).toEqual("Banditry");
    global.Math.random = () => 0.53;
    expect(crimeRandomizer()).toEqual("Banditry");
    global.Math.random = () => 0.54;
    expect(crimeRandomizer()).toEqual("Banditry");
});

test('should return Burglary when 56-60', () => {
    global.Math.random = () => 0.55;
    expect(crimeRandomizer()).toEqual("Burglary");
    global.Math.random = () => 0.56;
    expect(crimeRandomizer()).toEqual("Burglary");
    global.Math.random = () => 0.57;
    expect(crimeRandomizer()).toEqual("Burglary");
    global.Math.random = () => 0.58;
    expect(crimeRandomizer()).toEqual("Burglary");
    global.Math.random = () => 0.59;
    expect(crimeRandomizer()).toEqual("Burglary");
});

test('should return Pickpocketing when 61-65', () => {
    global.Math.random = () => 0.60;
    expect(crimeRandomizer()).toEqual("Pickpocketing");
    global.Math.random = () => 0.61;
    expect(crimeRandomizer()).toEqual("Pickpocketing");
    global.Math.random = () => 0.62;
    expect(crimeRandomizer()).toEqual("Pickpocketing");
    global.Math.random = () => 0.63;
    expect(crimeRandomizer()).toEqual("Pickpocketing");
    global.Math.random = () => 0.64;
    expect(crimeRandomizer()).toEqual("Pickpocketing");
});

test('should return Cattle Rustling when 66-68', () => {
    global.Math.random = () => 0.65;
    expect(crimeRandomizer()).toEqual("Cattle Rustling");
    global.Math.random = () => 0.66;
    expect(crimeRandomizer()).toEqual("Cattle Rustling");
    global.Math.random = () => 0.67;
    expect(crimeRandomizer()).toEqual("Cattle Rustling");
});

test('should return Murder when 69-72', () => {
    global.Math.random = () => 0.68;
    expect(crimeRandomizer()).toEqual("Murder");
    global.Math.random = () => 0.69;
    expect(crimeRandomizer()).toEqual("Murder");
    global.Math.random = () => 0.70;
    expect(crimeRandomizer()).toEqual("Murder");
    global.Math.random = () => 0.71;
    expect(crimeRandomizer()).toEqual("Murder");
});

test('should return Rioting when 73-78', () => {
    global.Math.random = () => 0.72;
    expect(crimeRandomizer()).toEqual("Rioting");
    global.Math.random = () => 0.73;
    expect(crimeRandomizer()).toEqual("Rioting");
    global.Math.random = () => 0.74;
    expect(crimeRandomizer()).toEqual("Rioting");
    global.Math.random = () => 0.75;
    expect(crimeRandomizer()).toEqual("Rioting");
    global.Math.random = () => 0.76;
    expect(crimeRandomizer()).toEqual("Rioting");
    global.Math.random = () => 0.77;
    expect(crimeRandomizer()).toEqual("Rioting");
});

test('should return Assault when 79-83', () => {
    global.Math.random = () => 0.78;
    expect(crimeRandomizer()).toEqual("Assault");
    global.Math.random = () => 0.80;
    expect(crimeRandomizer()).toEqual("Assault");
    global.Math.random = () => 0.81;
    expect(crimeRandomizer()).toEqual("Assault");
    global.Math.random = () => 0.82;
    expect(crimeRandomizer()).toEqual("Assault");
});

test('should return Treason when 84-85', () => {
    global.Math.random = () => 0.83;
    expect(crimeRandomizer()).toEqual("Treason");
    global.Math.random = () => 0.84;
    expect(crimeRandomizer()).toEqual("Treason");
});

test('should return 2 offences when 86-92', () => {
    expect(multipleOffense(1).length).toEqual(2);
    // global.Math.random = () => 0.86;
    // expect(crimeRandomizer()).length.toEqual(2);
    // global.Math.random = () => 0.87;
    // expect(crimeRandomizer()).length.toEqual(2);
    // global.Math.random = () => 0.88;
    // expect(crimeRandomizer()).length.toEqual(2);
    // global.Math.random = () => 0.89;
    // expect(crimeRandomizer()).length.toEqual(2);
    // global.Math.random = () => 0.90;
    // expect(crimeRandomizer()).length.toEqual(2);
    // global.Math.random = () => 0.91;
    // expect(crimeRandomizer()).length.toEqual(2);
});



// test('should return Burglary when 56-60', () => {
//     global.Math.random = () => 0.27;
//     expect(crimeRandomizer()).toEqual("Burglary");
// });