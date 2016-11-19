function $(id) {
    return document.getElementById(id);
}

//要做事先找人
var box = $("box");
var arr = $("arr");


//鼠标经过盒子 显示箭头 离开消失
box.onmouseover = function() {
    arr.style.display = "block"; //装有小箭头的盒子显示出来
}
box.onmouseout = function() {
    arr.style.display = "none";
}