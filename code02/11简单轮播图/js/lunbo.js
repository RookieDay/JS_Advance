 //要做事先找人
 var box = document.getElementById("box");
 var inner = box.children[0];
 var ul = inner.children[0];
 var square = inner.children[1];
 var squares = square.children;
 var imgWidth = inner.offsetWidth; //图片的宽度
 //alert(imgWidth);


 //鼠标经过 按钮排他
 for (var i = 0; i < squares.length; i++) {
     squares[i].index = i;
     //给每一个按钮绑定鼠标经过事件
     squares[i].onmouseover = function() {
         //干掉所有人
         for (var j = 0; j < squares.length; j++) {
             squares[j].className = "";
         }
         //留下我自己
         this.className = "current";
         // 让广告 渐渐地 移动到对应位置

         //target 和 当前按钮的索引号 和 图片宽度有关 而且是负数
         var target = -this.index * imgWidth;
         animate(ul, target);
     }
 }


 function animate(obj, target) {
     clearInterval(obj.timer); //为了防止重复调用 先清理一下
     obj.timer = setInterval(function() {
         var leader = obj.offsetLeft; //获取对象当前位置
         //往右走 left数值越来越大 step 正数
         //往左走 left数值越来越小 step 负数
         //如果leader < target leader 在左边 就应该往右走
         var step = 20;
         /*if (leader < target) {
          step = step;
          } else {
          step = -step;
          }*/
         step = leader < target ? step : -step; //判断对象移动的方向
         //判断终点 如果没到终点就执行动画
         //Math.abs(leader - target) 对象当前位置和target的距离
         //如果距离大于步长 说明还可以继续移动 否则说明再迈一步就超过终点了
         if (Math.abs(leader - target) > Math.abs(step)) {
             //leader = leader + step
             obj.style.left = leader + step + "px";
         } else {
             clearInterval(obj.timer);
             //手动将快要到达终点的对象放到终点
             obj.style.left = target + "px";
         }
     }, 25)
 }