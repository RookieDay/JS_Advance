var btn = document.getElementById("btn");
var box = document.getElementById("box");

var G = 1;
btn.onclick = function() {
    var speedX = 20; //水平速度恒定
    var speedY = -10; //垂直初速度为0
    setInterval(function() {
        speedY = speedY + G;
        box.style.left = box.offsetLeft + speedX + "px";
        box.style.top = box.offsetTop + speedY + "px";
    }, 25);

}