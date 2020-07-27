function checkForm(form)
  {
    if(form.username.value == "") {
      alert("Error:Username must be at least 3 characters");
      form.username.focus();
      return false;
    }
    if(form.email.value == "") {
        alert("Error:Email is not valid");
        form.username.focus();
        return false;
      }

      if(form.password.value == "") {
        alert("Password must be atleast 6 character");
        form.username.focus();
        return false;
      }
      if(form.cpassword.value == "") {
        alert("Password2 is required");
        form.username.focus();
        return false;
      }
    }