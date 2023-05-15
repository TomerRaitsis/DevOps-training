const checkFunctions = require('../checkFunctions.mjs');


describe('isValidGrade', () => {
  it('returns true for valid grades', () => {
    expect(checkFunctions.isValidGrade(90)).toBe(true);
    expect(checkFunctions.isValidGrade(0)).toBe(true);
    expect(checkFunctions.isValidGrade(100)).toBe(true);
  });

  it('returns false for invalid grades', () => {
    expect(checkFunctions.isValidGrade(-1)).toBe(false);
    expect(checkFunctions.isValidGrade(101)).toBe(false);
  });
});

describe('isValidName', () => {
  it('returns true for valid names', () => {
    expect(checkFunctions.isValidName('John')).toBe(true);
  });

  it('returns false for invalid names', () => {
    expect(checkFunctions.isValidName('John123')).toBe(false);
    expect(checkFunctions.isValidName('J0hn')).toBe(false);
  });
});