function checkDate(date, errorId) {
  var minYear = 1900;
  var maxYear = 2010;

  var errMsg = "";

  re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;

  if (date.value != "") {
    if ((regex = date.value.match(re))) {
      if (regex[1] < 1 || regex[1] > 31) {
        errMsg = `Invalid date`;
      } else if (regex[2] < 1 || regex[2] > 12) {
        errMsg = "Invalid month";
      } else if (regex[3] < minYear || regex[3] > maxYear) {
        errMsg = `Invalid Year - must be between ${minYear} and ${maxYear}`;
      }
    }
  }

  if (errMsg != "") {
    errorId.innerHTML = errMsg;
    date.focus();
    return false;
  }

  return true;
}

function parseDate(str) {
  var date = str.split("/");
  var newDate = new Date(date[2], date[1] - 1, date[0]);
  return newDate;
}

function myFunction() {
  var date1 = document.getElementById("startDate");
  var date2 = document.getElementById("endDate");
  var err1 = document.getElementById("error1");
  var err2 = document.getElementById("error2");
  var result = document.getElementById("result");

  err1.innerHTML = "";
  err2.innerHTML = "";
  result.innerHTML = "";

  if (date1.value > date2.value) {
    err1.innerHTML = "Start date cannot be after end date.";
    return false;
  } else {
    checkDate(date1, err1);
    checkDate(date2, err2);
  }

  var newdate1 = parseDate(date1.value);
  var newdate2 = parseDate(date2.value);

  var datediff = Math.round((newdate2 - newdate1) / (1000 * 60 * 60 * 24));

  if (err1.innerHTML != "" || err2.innerHTML != "") {
    return false;
  } else {
    result.innerHTML = `The date difference between ${date1.value} and ${date2.value} is ${datediff} days`;
  }
}
