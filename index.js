function generatepass() {
  var length = 8,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
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
