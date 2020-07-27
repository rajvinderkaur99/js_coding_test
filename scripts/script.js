function checkForm() {
  var x = document.forms["myForm"]["uname"].value;
  if (x == "") {
    alert("Username must be at least 3 characters");
    return false;
  }
  var y = document.forms["myForm"]["email"].value;
  if (y == "") {
    alert("Email is not valid");
    return false;
  }
  var z = document.forms["myForm"]["psw"].value;
  if (z == "") {
    alert("Password must be at least 6 character");
    return false;
  }
  var t = document.forms["myForm"]["psw-repeat"].value;
  if (t == "") {
    alert("Password2 is required");
    return false;
  }



}
