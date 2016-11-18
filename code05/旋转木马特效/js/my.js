window.onload = function() {
    var wrap = document.getElementById("wrap");
    var slide = document.getElementById("slide");
    var ul = slide.children[0];
    var lis = ul.children;
    var arrRight = document.getElementById("arrRight");
    var arrLeft = document.getElementById("arrLeft");

    var arrow = document.getElementById("arrow");
    var config = [ //config 配置
        {
            width: 400,
            top: 20,
            left: 50,
            opacity: 0.2,
            zIndex: 2
        }, //0
        {
            width: 600,
            top: 70,
            left: 0,
            opacity: 0.8,
            zIndex: 3
        }, //1
        {
            width: 800,
            top: 100,
            left: 200,
            opacity: 1,
            zIndex: 4
        }, //2
        {
            width: 600,
            top: 70,
            left: 600,
            opacity: 0.8,
            zIndex: 3
        }, //3
        {
            width: 400,
            top: 20,
            left: 750,
            opacity: 0.2,
            zIndex: 2
        } //4
    ]; //其实就是一个配置单 规定了每张图片的大小位置层级透明度
    wrap.onmouseover = function() {
        animate(arrow, { "opacity": 1 });
    }
    wrap.onmouseout = function() {
        animate(arrow, { "opacity": 0 });
    }

    function assign() {
        for (var i = 0; i < lis.length; i++) {
            animate(lis[i], config[i], function() {
                flag = true;
            });
        }
    }


    assign();
    arrRight.onclick = function() {
        if (flag) {
            //点击右侧按钮 配置单 删除第一个元素 追加到结尾
            config.push(config.shift());
            assign();
            flag = false;
        }
    }
    arrLeft.onclick = function() {
        if (flag) {
           //点击左侧按钮 配置单 删除最后一个 追加到开头
            config.unshift(config.pop());
            assign();
            flag = false;
        }
    }
    var flag = true;
}