// JavaScript Document
function register() {
 // var rules = document.getElementById("rules");
 // rules.style.display = "block";
 // window.location.hash = "rules";
 window.location.href = "http://visorfestival.ir/album/";
}
function redirToForm(){
  var terms = document.getElementById("accepted-rules");
  if (terms.checked) {
    window.location.href = "https://forms.zohopublic.com/visorfestival/form/test/formperma/nY9Xs_I3mzYWS3JakE1lccekuRoNW6crSrAndssAHfE";
  } else {
    alert("پذیرفتن مقررات الزامی است!")
  }
}
