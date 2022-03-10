function generatepass() {
  var length
  if(document.getElementById("check-13").checked == true && document.getElementById("check-8").checked == true)
  {
    alert("Select only one option ");

  }
   else if(document.getElementById("check-8").checked === true)
  {
    length=8;
  }
  else if(document.getElementById("check-13").checked == true)
  {
    length=13;
  }
  else {
    alert("Select any one option ");

  }

  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
let pass1 = document.getElementById("pass-1")
let pass2 = document.getElementById("pass-2")
let pass3 = document.getElementById("pass-3")
let pass4 = document.getElementById("pass-4")
function generate ()
{
   pass1.textContent = generatepass();
   pass2.textContent = generatepass();
   pass3.textContent = generatepass();
   pass4.textContent = generatepass();
}
