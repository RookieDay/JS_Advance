 var pic = $("pic");
 //窗体滚动的时候 计算页面被卷去的头部的高度 设置小广告的offsetTop
 // 让小广告 跟着屏幕走
 window.onscroll = function() {
     //target 页面被卷去的头部的高度再加上一点呼吸的距离
     var target = scroll().top + 50;
     animate(pic, target);
 }

 function animate(obj, target) {
     clearInterval(obj.timer); //为了防止重复调用
     obj.timer = setInterval(function() {
         var leader = obj.offsetTop;
         var step = (target - leader) / 10;
         step = step > 0 ? Math.ceil(step) : Math.floor(step);
         console.log("target:" + target + "---leader:" + leader + "---step:" + step);
         if (leader != target) { //说明还没有到
             obj.style.top = leader + step + "px";
         } else { //说明到了
             clearInterval(obj.timer);
         }
     }, 15)
 }