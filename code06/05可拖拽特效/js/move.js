var d_box = document.getElementById("d_box");
var drop = document.getElementById("drop");
drop.onmousedown = function(event) {
    var event = event || window.event;
    var pageX = event.pageX || event.clientX +
        document.documentElement.scrollLeft;
    var pageY = event.pageY || event.clientY +
        document.documentElement.scrollTop;
    var spaceX = pageX - d_box.offsetLeft;
    var spaceY = pageY - d_box.offsetTop;
    // 这里将移动事件代理到document上是因为你的移动过程是在document上进行的，使用document即不会因为移动过快丢失事件，
    // 也可以更方便得到鼠标的准确位置。但是按下和抬起的事件由应该做到div里，
    // 因为你的需求是按下div才进行移动，不是随便在document的任意位置按下也可以移动
    document.onmousemove = function(event) {
        var event = event || window.event;
        var pageX = event.pageX || event.clientX +
            document.documentElement.scrollLeft;
        var pageY = event.pageY || event.clientY +
            document.documentElement.scrollTop;
        d_box.style.left = pageX - spaceX + "px";
        d_box.style.top = pageY - spaceY + "px";

        // 清理选中文字
        window.getSelection ? window.getSelection().removeAllRanges()
            : document.selection.empty();

    }
}
document.onmouseup = function() {
    document.onmousemove = null;
}