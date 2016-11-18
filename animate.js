function animate(obj, json, fn) {
    clearInterval(obj.timer);
<<<<<<< HEAD
    obj.timer = setInterval(function() {
        var flag = true;
        for (var k in json) {
            if (k == "opacity") {
                var leader = getStyle(obj, k) * 100;
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                obj.style[k] = (leader + step) / 100;
            } else if (k == "zIndex") {
                obj.style[k] = json[k];
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                obj.style[k] = leader + step + "px";
            }
            if (leader != target) {
                flag = false;
=======
    obj.timer = setInterval(function () {
        var flag = true;//标记为true的时候表示可以清理
        for (var k in json) {
            //{"left": 400}
            // 属性名 属性的目标值
            // k json[k]
            var leader = parseInt(getStyle(obj, k)) || 0;
            var target = json[k];
            var step = (target - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            obj.style[k] = leader + step + "px";
            if (leader != target) {
                flag = false;//只要有一个属性没有达到目标值就告诉标记不能清理
>>>>>>> c72e9bc32b73a646af5848a575b7618e5eb9c983
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 15)
}

<<<<<<< HEAD
=======
//需求 获取任意对象的任意属性
>>>>>>> c72e9bc32b73a646af5848a575b7618e5eb9c983
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj, null)[attr];
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> c72e9bc32b73a646af5848a575b7618e5eb9c983
