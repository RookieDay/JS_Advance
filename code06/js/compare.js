var scrollBar1 = document.getElementById("scrollBar1");
var scrollBar2 = document.getElementById("scrollBar2");
var bar1 = scrollBar1.children[0];
var bar2 = scrollBar2.children[0];
var mask1 = scrollBar1.children[1];
var mask2 = scrollBar2.children[1];
var demo = document.getElementById("demo");

bar1.onmousedown = function(event) {
    var event = event || window.event;
    var leftVal = event.clientX - this.offsetLeft;
    console.log(leftVal)
        // console.log(this.offsetLeft)
    var that = this;
    document.onmousemove = function(event) {
        var event = event || window.event;
        that.style.left = event.clientX - leftVal + "px";
        bar2.style.left = (event.clientX - leftVal) * 2 + "px";

        var val = parseInt(that.style.left);
        if (val < 0) {
            that.style.left = 0;
            bar2.style.left = 0;
        } else if (val > 190) {
            that.style.left = "190px";
            bar2.style.left = "390px";
        }
        mask1.style.width = that.style.left;
        mask2.style.width = bar2.style.left;

        demo.innerHTML = "已经走了:" + parseInt(parseInt(that.style.left) / 190 * 100) + "%";
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
    }


    document.onmouseup = function() {
        document.onmousemove = null;
    }
}