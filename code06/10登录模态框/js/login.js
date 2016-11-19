//找人
function $(id) {
    return document.getElementById(id);
}
var login = $("login");
var mask = $("mask");
var show = $("show");


//点击login显示mask和show
login.onclick = function(event) {
        mask.style.display = "block";
        show.style.display = "block";
        document.body.style.overflow = "hidden";
        //问题发生在login身上就在login身上清除冒泡
        var event = event || window.event;
        if (event && event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
    //点击其他地方让mask和show隐藏
document.onclick = function(event) {
    var event = event || window.event;
    var targetId = event.target ? event.target.id : event.srcElement.id;
    if (targetId != "show") {
        mask.style.display = "none";
        show.style.display = "none";
        document.body.style.overflow = "visible";
    }
}