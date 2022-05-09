document.querySelector("#upload").addEventListener("click", myfunc);
var a = JSON.parse(localStorage.getItem("mobile"));
function myfunc() {
  if (a == null) {
    window.location.href = "signIn.html";
  } else {
    window.location.href = "upload.html";
  }
}

var c = JSON.parse(localStorage.getItem("cartData"));

// if(c==null){
//   window.location.href="emptycart.html"

// }
// else if (c==[]){
//   window.location.href="cart.html"
// }

document.querySelector("#empty").addEventListener("click", myfunc8);

function myfunc8() {
  if (c == null) {
    window.location.href = "products.html";
  }
}

document.querySelector("#signin").addEventListener("click", myfunc);
var d = JSON.parse(localStorage.getItem("userData"));
function myfunc() {
  if (d == null) {
    window.location.href = "signIn.html";
  }
}
