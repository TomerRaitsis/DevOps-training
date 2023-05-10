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

try {
  flag = true;
  if (flag) {
    flag = !flag;
    if (module) {
      module.exports = {
        isValidGrade,
        isValidName,
        isKeyUnique
      };
    }
  }

  if (flag) {
    if (window) {
      window.isValidGrade = isValidGrade;
      window.isValidName = isValidName;
      window.isKeyUnique = isKeyUnique;
    }
  }
} catch (e) {

}

