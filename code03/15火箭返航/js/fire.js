var backTop = $("backTop");
var timer = null;
var leader = 0;
window.onscroll = function() {
    if (scroll().top > 0) {
        show("backTop");
    } else {
        hide("backTop");
    }
    leader = scroll().top;
}
backTop.onclick = function() {
    clearInterval(timer);
    timer = setInterval(function() {
        var target = 0;
        var step = (target - leader) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        console.log(leader)
        leader = leader + step;
        window.scrollTo(0, leader);
        if (leader == target) {
            clearInterval(timer);
        }
    }, 15);
}