function isValidGrade(grade) {
    if (isNaN(grade) || grade < 0 || grade > 100) {
      return false;
    }
    return true;
  }
   function isValidName(name) {
    var letters = /^[A-Za-z]+$/;
    if (name.match(letters)) {
      return true;
    }
    return false;
  }
   function isKeyUnique(key) {
    return localStorage.getItem(key) === null;
  }



  
describe('isValidGrade', () => {
  it('returns true for valid grades', () => {
    expect(isValidGrade(90)).toBe(true);
    expect(isValidGrade(0)).toBe(true);
    expect(isValidGrade(100)).toBe(true);
  });

  it('returns false for invalid grades', () => {
    expect(isValidGrade(-1)).toBe(false);
    expect(isValidGrade(101)).toBe(false);
  });
});

describe('isValidName', () => {
  it('returns true for valid names', () => {
    expect(isValidName('John')).toBe(true);
  });

  it('returns false for invalid names', () => {
    expect(isValidName('John123')).toBe(false);
    expect(isValidName('J0hn')).toBe(false);
  });
});
