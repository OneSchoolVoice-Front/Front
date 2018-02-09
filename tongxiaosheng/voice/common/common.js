// 获取类名
function $(params) {
    var obj = document.getElementsByClassName(params);
    return obj;
}
// 日期
function getDate(){
    var date = new Date();
    var year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    hour = date.getHours(),
    min = date.getMinutes();
    if(min<10){
        min = "0" + min;
    }
    time = (year+'-'+month+'-'+day+' '+hour+':'+min);
    return time;

}
/* 封装ajax函数
 2  * @param {string}opt.type http连接的方式，包括POST和GET两种方式
 3  * @param {string}opt.url 发送请求的url
 4  * @param {boolean}opt.async 是否为异步请求，true为异步的，false为同步的
 5  * @param {object}opt.data 发送的参数，格式为对象类型
 6  * @param {function}opt.success ajax发送并接收成功调用的回调函数
 7  */
function ajax(opt) {
    console.log('begin ajax send');
    opt = opt || {};
    opt.method = opt.method.toUpperCase() || 'POST';
    opt.url = opt.url || '';
    opt.async = opt.async || true;
    opt.data = opt.data || null;
    opt.success = opt.success || function () { };
    var xmlHttp = null;
  
    if (XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    }
    else {
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
    } 
    
    var params = [];
    for (var key in opt.data) {
        params.push(key + '=' + opt.data[key]);
    }
    var postData = params.join('&');

    if (opt.method.toUpperCase() === 'POST') {
        console.log('laladdd')
        xmlHttp.open(opt.method, opt.url, opt.async);
        xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        xmlHttp.send(postData);
    }
    else if (opt.method.toUpperCase() === 'GET') {
        xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);
        xmlHttp.send(null);
    }

    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) { 
            opt.success(xmlHttp.responseText);
        }
    };
}

// cookie
var cookie = {

    //根据key值获取对应的cookie
    get:function(key){

        //获取cookie
        var data = document.cookie;
        //获取key第一次出现的位置    pwd=
        var startIndex = data.indexOf(key+'=');
        //  name=123;pwd=abc
        //如果开始索引值大于0表示有cookie
        if(startIndex>-1) {

            //key的起始位置等于出现的位置加key的长度+1
            startIndex = startIndex+key.length+1;

            //结束位置等于从key开始的位置之后第一次;号所出现的位置
            var endIndex = data.indexOf(';',startIndex);

            //如果未找到结尾位置则结尾位置等于cookie长度，之后的内容全部获取
            endIndex = endIndex<0 ? data.length:endIndex;

            return decodeURIComponent(data.substring(startIndex,endIndex));


        }else {

            return '';
        }

    },

    set:function(key,value,time){
        //默认保存时间
        var time = time;
        //获取当前时间
        var cur = new Date();

        var undefined;

        //设置指定时间
        cur.setTime(cur.getTime()+time*24*3600*1000);

        //创建cookie  并且设置生存周期为GMT时间
        document.cookie = key+'='+encodeURIComponent(value)+';expires='+(time===undefined?'':cur.toGMTString());

    },

    del:function(key){

        //获取cookie
        var data = this.get(key);

        //如果获取到cookie则重新设置cookie的生存周期为过去时间
        if(data!==false){

            this.set(key,data,-1);

        }

    }
}