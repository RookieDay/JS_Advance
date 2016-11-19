var btn = document.getElementById("btn");
var box = document.getElementById("box");
var G = 1;
btn.onclick = function() {
    var speedX = 5; //水平
    var speedY = 0; //垂直

    setInterval(function() {
        speedY = speedY + G;
        // console.log(speedY)
        box.style.left = box.offsetLeft + speedX + "px";
        box.style.top = box.offsetTop + speedY + "px";
        console.log(box.style.Top)
        if (box.offsetTop + box.offsetHeight > 400) {
            box.style.top = 400 - box.offsetHeight + "px";
            speedY = -speedY;
        }
    }, 25);
}