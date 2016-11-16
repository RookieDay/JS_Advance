function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;//���Ϊtrue��ʱ���ʾ��������
        for (var k in json) {
            //{"left": 400}
            // ������ ���Ե�Ŀ��ֵ
            // k json[k]
            var leader = parseInt(getStyle(obj, k)) || 0;
            var target = json[k];
            var step = (target - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            obj.style[k] = leader + step + "px";
            if (leader != target) {
                flag = false;//ֻҪ��һ������û�дﵽĿ��ֵ�͸��߱�ǲ�������
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

//���� ��ȡ����������������
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj, null)[attr];
    }
}