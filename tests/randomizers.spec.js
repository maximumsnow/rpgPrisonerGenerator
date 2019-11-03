


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

test('should return Political Crime when < 10', () => {
    global.Math.random = () => 0.05;
    expect(crimeRandomizer()).toEqual("Political Crime");
});

test('should return Embezzlement when 11', () => {
    global.Math.random = () => 0.10;
    expect(crimeRandomizer()).toEqual("Embezzlement");
});

test('should return Fencing Stolen Goods when 12-14', () => {
    global.Math.random = () => 0.13;
    expect(crimeRandomizer()).toEqual("Fencing Stolen Goods");
})