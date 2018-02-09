// 聊天创建对象
function Msg(){
    this.head = '';
    this.name = '';
    this.words = '';
}
Msg.prototype = {
    bindDOM:function(){
        var str = '<div class="msg">'
        str += '<div class="other_head">'
        str += '<img src="'+this.head+'" alt="">'
        str += '</div>'
        str += '<span class="other_msg">'
        str += '<p class="name">'+this.name+'</p>'
        str += '<span class="info">'+this.words+'</span>'
        str += '</span>'       
        str += '</div>' 
        return str;        
    }
}  
var count = 0;
var msgs = [];

$('send')[0].onclick=function (){
 
    if($('write')[0].value == ''|| $('write')[0].value == null){
        alert("发送不能为空");
    }
    else{
        ajax({
            method: 'POST',
            url: 'data.json',
            data: {
                name1: 'value1',
                name2: 'value2'
            },
          success: function (response) {
           
            var list=eval("("+response+")");
              console.log(list.data[0].name);
          
            var msg1 = new Msg();
            msg1.head = list.data[0].head;
            msg1.name = list.data[0].name;
            msg1.words = list.data[0].words;
           
            msgs.push(msg1);
            console.log(msgs)
            var str = '';
        
            for(var j = 0; j < msgs.length; j++){
            str += msgs[j].bindDOM();
           
            }
            $('record')[0].innerHTML += str;

            $('write')[0].value = '';
          }
       });
     
    }
}


// $('send')[0].onclick = function () {  // title:称号  words: 发送的消息  head: 头像
//     var words = $('write')[0].value,
//         name = "test",
//         head = 'image/icon_QQ.png';
//     console.log(this);
//     if (words == '' || words == null) {
//         alert('发送内容不能为空');
//     }
//     else {
//         var parentNode = $('record')[0],
//             msg = document.createElement('div');
//         msg.setAttribute('class', 'msg');
//         parentNode.appendChild(msg);

//         var other_head = document.createElement('div');
//         other_head.setAttribute('class', 'other_head')
//         msg.appendChild(other_head);

//         var img = document.createElement('img');
//         img.src = head;
//         other_head.appendChild(img);

//         var other_msg = document.createElement('span');
//         other_msg.setAttribute('class', 'other_msg');
//         msg.appendChild(other_msg);

//         var title = document.createElement('p');
//         title.setAttribute('class', 'title');
//         title.innerHTML = name;
//         other_msg.appendChild(title);

//         var info = document.createElement('span');
//         info.setAttribute('class', 'info');
//         info.innerHTML = words;
//         other_msg.appendChild(info);

//         words = $('write')[0].value = '';
//     }
// }

