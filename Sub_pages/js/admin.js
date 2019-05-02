function signup() {
  window.location = "signup.html";
}

function back() {
  window.location = "Accountant-login.html";
}

function backto() {
  window.location = "Accountant-section.html";
}

function addStudent() {
  window.location = "Add-student.html";
}

function edit() {
  window.location = "Edit-student.html";
}

function fee() {
  window.location = "fees.html";
}
function check(form){
  if(form.userid.value == "admin" && form.password.value == "admin123")
  {
    window.location = "Admin-section.html";
  }
  else {
    {
      alert("The username and password you entered don't mach");
    }
  }
}

function acc(){
  window.location = "Admin-login.html"
}

function check2(form){
  if(form.userid.value == "123" && form.password.value == "admin123")
  {
    window.location = "Accountant-section.html";
  }
  else {
    alert("The username and password you entered don't mach");
  }
}
