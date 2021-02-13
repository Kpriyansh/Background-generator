var css = document.querySelector("h3");
var hex = document.querySelector("h4");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

//using event "input"
function getGradient() {
    body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
    hex.innerHTML = "linear-gradient" + "(" + "to right " + ", " + color1.value + ", " + color2.value + ")";
}
color1.addEventListener("input", getGradient);
color2.addEventListener("input", getGradient);

