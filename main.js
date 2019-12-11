
function updateWebviews() {
  console.log("updateWebviews")
  var webview = document.querySelector("webview");
  webview.style.height = document.documentElement.clientHeight + "px";
  webview.style.width = document.documentElement.clientWidth + "px";
  //webview.style.height = document.body.clientHeight + "px";
  //webview.style.width = document.body.clientWidth + "px";
};

window.onload = function(){
  updateWebviews();
};
window.onresize = function(){
  updateWebviews();
};
