        window.onload = function() {
            var container = document.getElementById("container");
            var boxes = container.children;

            // 页面宽度
            var pageWidth = window.innerWidth;
            // 盒子宽度
            var boxWidth = boxes[0].offsetWidth;
            // 列数
            var column = Math.floor(pageWidth / boxWidth);
            // console.log(pageWidth)
            // console.log(column)
            // 存放第一行高度
            var　 arrHeight = [];

            function waterfall() {
                for (var i = 0; i < boxes.length; i++) {
                    if (i < column) {
                        arrHeight[i] = boxes[i].offsetHeight;
                    } else {
                        var minHeight = getMin(arrHeight).value;
                        var minHeightIndex = getMin(arrHeight).minIndex;
                        boxes[i].style.position = "absolute";
                        boxes[i].style.top = minHeight + "px";
                        boxes[i].style.left = boxes[minHeightIndex].offsetLeft + "px";
                        arrHeight[minHeightIndex] = minHeight + boxes[i].offsetHeight;
                    }
                }
            }

            waterfall();


            window.onscroll = function() {
                if (bottomed()) {
                    //触底之后就应该向后台请求数据
                    //由于现在我们还没有学习后台知识 我们先用写死的变量替代
                    var json = [{
                        "src": "images/P_000.jpg"
                    }, {
                        "src": "images/P_001.jpg"
                    }, {
                        "src": "images/P_002.jpg"
                    }, {
                        "src": "images/P_003.jpg"
                    }, {
                        "src": "images/P_004.jpg"
                    }, {
                        "src": "images/P_005.jpg"
                    }, {
                        "src": "images/P_006.jpg"
                    }, {
                        "src": "images/P_007.jpg"
                    }, {
                        "src": "images/P_008.jpg"
                    }, {
                        "src": "images/P_009.jpg"
                    }, ];
                    for (var i = 0; i < json.length; i++) {
                        var div = document.createElement('div');
                        div.className = "box";
                        var img = document.createElement("img");
                        img.src = json[i]["src"];
                        div.appendChild(img);
                        container.appendChild(div);
                    }
                    waterfall();

                }
            }

            function bottomed() {
                var scrollTop = window.pageYOffset;
                var clientHeight = window.innerHeight;
                var lastBoxTop = boxes[boxes.length - 1].offsetTop;
                if ((scrollTop + clientHeight) > lastBoxTop) {
                    return true;
                } else {
                    return false;
                }
            }

            function getMin(arr) {
                var min = {};
                min.minIndex = 0;
                min.value = arr[min.minIndex];
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i] < min.value) {
                        min.value = arr[i];
                        min.minIndex = i;
                    }
                }
                return min;
            }
        }