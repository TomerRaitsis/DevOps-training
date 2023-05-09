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

window.checkFunctions = {
  isValidGrade: isValidGrade,
  isValidName: isValidName,
  isKeyUnique: isKeyUnique
};
