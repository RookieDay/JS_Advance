 var topPart = $("topPart");
 var navBar = $("navBar");
 var mainPart = $("mainPart");

 //页面滚动的时候 进行判断 如果页面被卷去的头部大于topPart的高度 将navBar变为固定定位
 window.onscroll = function() {
     if (scroll().top > topPart.offsetHeight) {
         //alert("到啦");
         //将navBar变为固定定位
         navBar.className = "nav fixed";
         //navBar脱离标准流之后就不占位了 所以下面就一下就跳上去了
         mainPart.style.paddingTop = navBar.offsetHeight + "px";
     } else {
         navBar.className = "nav";
         mainPart.style.paddingTop = 0;
     }
 }