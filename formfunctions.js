const errorsDiv = document.getElementById('errors');
const sDiv = document.getElementById('success');

document.getElementById('box').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  writeToLocalStorage();
});


function writeToLocalStorage() {
  var studentName = document.getElementById('student-name').value;
  var grade1 = document.getElementById('exam-1').value;
  var grade2 = document.getElementById('exam-2').value;
  var grade3 = document.getElementById('exam-3').value;

  if (isValidName(studentName) && isKeyUnique(studentName) && isValidGrade(grade1) && isValidGrade(grade2) && isValidGrade(grade3)) {
    localStorage.setItem(studentName, "<br>Grade 1: " + grade1 + ", Grade 2: " + grade2 + ", Grade 3: " + grade3);
    document.getElementById('student-name').value = '';
    document.getElementById('exam-1').value = '';
    document.getElementById('exam-2').value = '';
    document.getElementById('exam-3').value = '';
    showLocalStorage();
    sDiv.innerHTML = "Document added successfully";
    errorsDiv.innerHTML = "";
  }
  else {
    if (errorsDiv) {
      errorsDiv.innerHTML = `
        <strong>One or more of your inputs are invalid:</strong><br>
        <strong>Attention:</strong><br>
        - Student name should be unique in the system and contain only letters (A-Z, a-z)<br>
        - Exams should be numbers between 0-100<br>
      `;
      sDiv.innerHTML = "";
    }

  }
}

function showLocalStorage() {
  var localStorageKeys = Object.keys(localStorage);
  var listItems = "";
  for (var i = 0; i < localStorageKeys.length; i++) {
    var key = localStorageKeys[i];
    var value = localStorage.getItem(key);
    listItems += "<li><strong>" + key + "</strong> : " + value + "</li>";
  }
  var list = document.createElement("ul");
  list.innerHTML = listItems;
  document.getElementById("results").innerHTML = listItems;
  sDiv.innerHTML = "";
  errorsDiv.innerHTML = "";
}

function clearLocalStorage() {
  localStorage.clear();
  document.getElementById("results").innerHTML = "";
  console.log("localStorage cleared");
  sDiv.innerHTML = "";
  errorsDiv.innerHTML = "";
}

window.showLocalStorage = showLocalStorage;
window.writeToLocalStorage = writeToLocalStorage;
window.clearLocalStorage = clearLocalStorage;