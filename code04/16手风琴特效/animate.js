function animate(obj, json) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;//先定义一个标记 flag为true表示可以清楚
        for (var k in json) {
            var leader = parseInt(getStyle(obj, k)) || 0;
            var target = json[k];
            var step = (target - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            obj.style[k] = leader + step + "px";
            if (leader != target) {
                flag = false;//只要有没达到的就把flag设置为false
            }
        }
        if (flag) {//说明所有属性都到达了目标
            clearInterval(obj.timer);
        }
    }, 15)
}
//需求 获取任意对象的任意属性
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj, null)[attr];
    }
}