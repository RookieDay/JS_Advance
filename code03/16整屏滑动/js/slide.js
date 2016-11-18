 var ul = document.getElementsByTagName("ul")[0];
 var ulLis = ul.children;
 var ol = document.getElementsByTagName("ol")[0];
 var olLis = ol.children;
 var leader = 0;
 var timer = null;
 window.onscroll = function() {
     leader = scroll().top;
 }
 var arr = ["red", "orange", "yellow", "green", "blue"];
 for (var i = 0; i < arr.length; i++) {
     ulLis[i].style.backgroundColor = arr[i];
     olLis[i].style.backgroundColor = arr[i];
 }
 for (var j = 0; j < olLis.length; j++) {
     olLis[j].index = j;
     olLis[j].onclick = function() {
         //N1
         // var target = ulLis[this.index].offsetTop;
         // clearInterval(timer);
         // timer = setInterval(function() {
         //     var step = (target - leader) / 10;
         //     step = step > 0 ? Math.ceil(step) : Math.floor(step);
         //     leader = leader + step;
         //     window.scrollTo(0, leader);
         //     if (leader == target) {
         //         clearInterval(timer);
         //     }
         // }, 25);

         //N2
         var target = ulLis[this.index].offsetTop;
         window.scrollTo(0, target);
     }
 }