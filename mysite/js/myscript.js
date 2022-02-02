var cycle = document.getElementById("cycle");
var ubtn = document.getElementById("ubtn");
var dbtn = document.getElementById("dbtn");

var rotateVal = cycle.style.transform;

var rotateSum;

ubtn.onclick = function(){
    rotateSum = rotateVal + "rotate(-90deg)";
    cycle.style.transform = rotateSum;
    rotateVal = rotateSum;
}

dbtn.onclick = function(){
    rotateSum = rotateVal + "rotate(90deg)";
    cycle.style.transform = rotateSum;
    rotateVal = rotateSum;
}