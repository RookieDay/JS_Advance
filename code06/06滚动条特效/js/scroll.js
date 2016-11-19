    function $(id) {
        return document.getElementById(id);
    }
    var box = $("box");
    var content = $("content");
    var bar = $("bar");

    //根据文本高度计算bar的高度
    //bar的高度/侧边栏的高度=box的高度/整个content的高度
    //bar的高度=box的高度/整个content的高度*侧边栏的高度
    if (content.offsetHeight > box.offsetHeight) {
        //content的高度>box的高度 才显示
        bar.style.height = box.offsetHeight / content.offsetHeight * box.offsetHeight + "px";
    } else {
        bar.style.height = 0;
    }

    bar.onmousedown = function(event) {
        var event = event || window.event;
        var pageY = window.pageY || event.clientY +
            document.documentElement.scrollTop;
        //根据鼠标在页面当中的位置去计算鼠标按下的时候在bar中的位置
        var spaceY = pageY - box.offsetTop - bar.offsetTop;
        document.onmousemove = function(event) {
            var event = event || window.event;
            var pageY = window.pageY || event.clientY +
                document.documentElement.scrollTop;
            var barY = pageY - box.offsetTop - spaceY;
            if (barY < 0) {
                barY = 0;
            }
            if (barY > (box.offsetHeight - bar.offsetHeight)) {
                barY = box.offsetHeight - bar.offsetHeight;
            }
            bar.style.top = barY + "px";
            // 清除选中的文字
            window.getSelection ? window.getSelection().removeAllRanges() :
                document.selection.empty();
            //按照比例移动content 方向是相反的
            //比例 = 内容移动的距离/滚动条移动的距离
            //(content的高度-box的高度)/(box的高度-bar的高度)
            var rate = (content.offsetHeight - box.offsetHeight) /
                (box.offsetHeight - bar.offsetHeight);
            content.style.top = -rate * barY + "px";
        }
    }
    document.onmouseup = function() {
        document.onmousemove = null;
    }