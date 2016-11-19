var btn = document.getElementById("btn");
var box = document.getElementById("box");
var G = 1;
btn.onclick = function() {
    var speedX = 5;
    var speedY = 0;
    setInterval(function() {
        speedY = speedY + G;
        box.style.left = box.offsetLeft + speedX + "px";
        box.style.top = box.offsetTop + speedY + "px";
        if(box.offsetTop + box.offsetHeight > 400) {
            box.style.top = 400 - box.offsetHeight + "px";
            speedY = -speedY * 0.5;
            speedX = speedX * 0.5;
        }
    });
}