    var box = document.getElementById("box");
    var smallBox = document.getElementById("smallBox");
    var mask = document.getElementById("mask");
    var bigBox = document.getElementById("bigBox");
    var bigImg = bigBox.children[0];

    smallBox.onmouseover = function() {
        mask.style.display = "block";
        bigBox.style.display = "block";
    }

    smallBox.onmouseout = function() {
        mask.style.display = "none";
        bigBox.style.display = "none";
    }
    smallBox.onmousemove = function(event) {

        var event = event || window.event;
        // 鼠标在页面的坐标
        var pageX = event.pageX || event.clientX +
            document.documentElement.scrollLeft;
        var pageY = event.pageY || event.clientY +
            document.documentElement.scrollTop;
        // 鼠标在盒子的坐标    
        var boxX = pageX - box.offsetLeft;
        var boxY = pageY - box.offsetTop;
        // 设置mask位置
        var maskX = boxX - mask.offsetWidth / 2;
        var maskY = boxY - mask.offsetHeight / 2;
        if (maskX < 0) {
            maskX = 0;
        }
        // 移动距离
        if (maskX > smallBox.offsetWidth - mask.offsetWidth) {
            // console.log(maskX);
            maskX = smallBox.offsetWidth - mask.offsetWidth
        }
        if (maskY < 0) {
            maskY = 0
        }
        if (maskY > smallBox.offsetHeight - mask.offsetHeight) {
            maskY = smallBox.offsetHeight - mask.offsetHeight;
        }
        mask.style.left = maskX + "px";
        mask.style.top = maskY + "px";


        //按照比例移动 而且方向相反
        //比例就是 bigImg移动的总长度/mask移动的总长度
        //bigImg移动的总长度=bigImg的宽度-bigBox的宽度
        var bigImgToMove = bigImg.offsetWidth - bigBox.offsetWidth;
        var maskToMove = smallBox.offsetWidth - mask.offsetWidth;
        var rate = bigImgToMove / maskToMove;
        bigImg.style.left = -rate * maskX + "px";
        bigImg.style.top = -rate * maskY + "px";
    }