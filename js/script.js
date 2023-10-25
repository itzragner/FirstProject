      // bouton show password

function myfunction() {
  var x = document.getElementById('pass');
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
        // password
function checkPassword() {
  password = document.getElementById('pass').value;
  confirmPassword = document.getElementById('password-confirm').value;
  lengthError = document.getElementById('password-length');
  lowercaseError = document.getElementById('password-lowercase');
  uppercaseError = document.getElementById('password-uppercase');
  numberError = document.getElementById('password-number');
  specialError = document.getElementById('password-special');
  matchError = document.getElementById('password-match');
  valid = true;
  
  if (password.length < 8) {
    lengthError.style.display = 'block';
    valid = false;
  } else {
    lengthError.style.display = 'none';
  }
  
  if (!password.match(/[a-z]/)) {
    lowercaseError.style.display = 'block';
    valid = false;
  } else {
    lowercaseError.style.display = 'none';
  }
  
  if (!password.match(/[A-Z]/)) {
    uppercaseError.style.display = 'block';
    valid = false;
  } else {
    uppercaseError.style.display = 'none';
  }
  
  if (!password.match(/[1-2]/)) {
    numberError.style.display = 'block';
    valid = false;
  } else {
    numberError.style.display = 'none';
  }
  
  if (!password.match(/[!@#$%^&*(),.?":{}|<>]/)) {
    specialError.style.display = 'block';
    valid = false;
  } else {
    specialError.style.display = 'none';
  }
  
  if (password !== confirmPassword) {
    matchError.style.display = 'block';
    valid = false;
  } else {
    matchError.style.display = 'none';
  }
  
  return valid;
}
  

        //header  

var y = 30;
var x=50
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  if (window.scrollY >= y) 
  {
    document.getElementById("buttom_top").style.display="block";

  } 
  else {
    
    document.getElementById("buttom_top").style.display="none";
  }
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByTagName("header")[0].style.top = "0";
  } else {
    document.getElementsByTagName("header")[0].style.top = "-110px"; 
  }
  prevScrollpos = currentScrollPos;
}
      //Search




