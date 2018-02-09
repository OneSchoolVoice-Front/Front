function topic(){
    this.head = '';
    this.content = '';
    this.count = '';
}
topic.prototype = {
    BindDOM: function() {
        var str = '<div class="view">'
            str += '<div class="view_left">'
            str += '<img src="'+this.head+'">'
            str += '</div>'
            str += '<div class="view_center">'
            str += '<span class="content">'+this.content+'</span>'
            str += '<span class="time"></span>'
            str += '</div>'
            str += '<div class="view_right">'
            str += '<hgroup>'
            str += '<img src="image/爱心.png" class="heart">'
            str += '<span class="count">'+this.count+'</span>'
            str += '</hgroup>'
            str += '</div>   '
            str += '</div>'
            return str;              
    }
}

var topic1 = new topic();
topic1.head = "image/微信.png";
topic1.content = '我是你爸爸我是你爸爸';
topic1.count = '12';

var topic2 = new topic();
topic2.head = "image/微信.png";
topic2.content = '哈哈哈哈哈啊哈哈哈';
topic2.count = '16';

var topics = [topic1,topic2];
var str = '';
for(var i = 0; i < topics.length; i++){
    str+= topics[i].BindDOM();
}
// 获取当前时间
$("contain")[0].innerHTML += str;
for(var i = 0; i <$('view').length; i++){
    var time = getDate();
    $('time')[i].innerHTML = time;
}

// 点赞
for(var i = 0; i < $('heart').length; i++){
    $('heart')[i].index = i;
        $('heart')[i].onclick = function() {
            var num = $('count')[this.index].innerHTML;
            $('count')[this.index].innerHTML = parseInt(num)+1;          
        }
   
}