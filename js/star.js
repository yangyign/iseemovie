//评论信息储存
var comments = ["什么鬼？？？？", "唉，无聊，没意思，浪费时间", "一般也就那样~~", "好看好看，强烈推荐！", "肥肠完美，不容错过！！！"];

//获取页面元素
var imgs = document.getElementById("star").children;
var text = document.getElementById("txt");
var score = document.getElementById("score").children[0];

var clickPos = -1;

function show(index) {
    for (var x = (index + 1); x < imgs.length; x++) { //清空
        imgs[x].src = "images/ajy/comments/star0.png";
    }
    if (index < 4) { //哭脸
        for (var j = 0; j <= index; j++) {
            imgs[j].src = "images/ajy/comments/star1.png";
        }
    } else { //笑脸
        for (var j = 0; j <= index; j++) {
            imgs[j].src = "images/ajy/comments/star2.png";
        }
    }
    text.value = comments[Math.floor(index / 2)]? comments[Math.floor(index / 2)]:"";
    if(text.value != ""){
        score.style["background-color"] = "green";
        score.innerHTML = (index + 1).toFixed(1);
    }else {
        score.style["background-color"] = "none";
        score.innerHTML = ""  
    }

}

for (var i = 0; i < imgs.length; i++) {
    imgs[i].index = i;
    //悬浮
    imgs[i].onmouseover = function() {
        var pos = this.index;
        show(pos);
    };

    //点击
    imgs[i].onclick = function() {
        clickPos = this.index;
        show(clickPos);
    };

    //离开
    imgs[i].onmouseout = function() {
        show(clickPos);
    };
}