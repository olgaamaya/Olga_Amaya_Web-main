var sizer = window.matchMedia( "(min-width: 950px)" );
var mouseTarget = document.getElementById('mouseTarget');
// var mouseTarget2 = document.getElementById('social_elements'); //

const collection = document.getElementsByClassName("figure.project-index");
let numb = document.getElementsByClassName("figure.project-index").length;

mouseTarget.addEventListener('mouseenter', function(){ 
 if (sizer.matches) {
 document.getElementById("bodyid").style.background = "var(--secondcolor)";
 for (let i = 0; i < collection.length; i++) {
  collection[i].style.border = "solid 2px pink";
}
}
else {
 document.getElementById("bodyid").style.background = '';
 for (let i = 0; i < collection.length; i++) {
  collection[i].style.border = "solid 2px pink";
}
}
}
);

mouseTarget.addEventListener('mouseleave', function(){
 if (sizer.matches) {
 document.getElementById("bodyid").style.background = "";
  for (let i = 0; i < collection.length; i++) {
  collection[i].style.border = "solid 2px pink";
}
}
else {
 document.getElementById("bodyid").style.background = "";
 for (let i = 0; i < collection.length; i++) {
  collection[i].style.border = "solid 2px pink";
}}});


mouseTarget2.addEventListener('mouseenter', function(){ 
 if (sizer.matches) {
 document.getElementById("bodyid").style.background = "var(--secondcolor)";
 for (let i = 0; i < collection.length; i++) {
  collection[i].style.border = "solid 2px pink";
}
}
else {
 document.getElementById("bodyid").style.background = '';
 for (let i = 0; i < collection.length; i++) {
  collection[i].style.border = "solid 2px pink";
}
}
}
);

mouseTarget2.addEventListener('mouseleave', function(){
 if (sizer.matches) {
 document.getElementById("bodyid").style.background = "";
  for (let i = 0; i < collection.length; i++) {
  collection[i].style.border = "solid 2px pink";
}
}
else {
 document.getElementById("bodyid").style.background = "";
 for (let i = 0; i < collection.length; i++) {
  collection[i].style.border = "solid 2px pink";
}}});
