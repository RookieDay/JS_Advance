var pic = document.getElementById("pic");
var timer = null;
document.onclick = function(event) {
    var event = event || window.event;
    var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
    var pageY = event.pageY || event.clientY + document.documentElement.scrollTop;

    clearInterval(timer);
    timer = setInterval(function() {
        var targetX = pageX - pic.offsetWidth / 2;
        var targetY = pageY - pic.offsetHeight / 2;
        // 起始位置
        var leaderX = pic.offsetLeft;
        var leaderY = pic.offsetTop;
        var stepX = (targetX - leaderX) / 10;
        var stepY = (targetY - leaderY) / 10;
        stepX = stepX > 0 ? Math.ceil(stepX) : Math.floor(stepX);
        stepY = stepY > 0 ? Math.ceil(stepY) : Math.floor(stepY);
        pic.style.left = leaderX + stepX + "px";
        pic.style.top = leaderY + stepY + "px";
        if (leaderX == targetX && leaderY == targetY) {
            clearInterval(timer);
        }
    }, 15);
}