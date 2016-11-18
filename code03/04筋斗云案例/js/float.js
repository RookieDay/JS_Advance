  function $(id) {
      return document.getElementById(id);
  }
  var navBar = $("navBar");
  var cloud = $("cloud");
  var lis = navBar.children;
  var lastPosition = 0;
  for (var i = 0; i < lis.length; i++) {
      lis[i].onmouseover = function() {
          var target = this.offsetLeft;
          animate(cloud, target);
      }
      lis[i].onmouseout = function() {
          animate(cloud, lastPosition);
      }
      lis[i].onclick = function() {
          lastPosition = this.offsetLeft;
      }
  }

  function animate(obj, target) {
      clearInterval(obj.timer);
      obj.timer = setInterval(function() {
          var leader = obj.offsetLeft;
          var step = (target - leader) / 10;
          step = step > 0 ? Math.ceil(step) : Math.floor(step);
          if (leader != target) {
              obj.style.left = leader + step + "px";
          } else {
              clearInterval(obj.timer);
          }
      }, 15);
  }