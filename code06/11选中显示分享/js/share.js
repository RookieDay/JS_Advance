var demo = document.getElementById("demo");
var test = document.getElementById("test");


document.onmousedown = function(event) {
    var event = event || window.event;
    var targetId = event.target ? event.target.id : event.srcElement.id;

    if (targetId != "demo") {
        demo.style.display = "none";
    }
}


//鼠标在test中弹起 根据鼠标的位置 显示demo
test.onmouseup = function(event) {
    var event = event || window.event;
    var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
    var pageY = event.pageY || event.clientY + document.documentElement.scrollTop;
    var txt = window.getSelection ? window.getSelection().toString() : document.selection.createRange().text;

    if (txt) {
        demo.style.display = "block";
        demo.style.left = pageX - 50 + "px";
        demo.style.top = pageY + 15 + "px";
    }
}