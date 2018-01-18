var nav = document.getElementsByClassName('navChild');
window.onscroll = function() {
    // 滚动条到顶部的距离
    var d = document.documentElement.scrollTop || document.body.scrollTop;
    var header = document.getElementsByTagName('header')[0];
    var circle = document.getElementsByClassName('pic');
    var bg = document.getElementsByClassName('bg_public');
    
    if(d>780) {
        header.setAttribute('class','scroll');
        // bg[0].style.backgroundPosition = '50% 10';
    }
    else{
        header.removeAttribute('class','scroll');
    }
    if(d>3780) {
        console.log(d);
        setTimeout(function(){
            for(var i = 0; i < circle.length; i++){
                circle[i].style.display = 'block';
            }
        },500);
    }
    
}
for(var j = 0; j <nav.length; j++){
    nav[j].onclick = function(){
        for(var i = 0; i < nav.length; i++){
            nav[i].firstChild.style.backgroundColor = '';
            console.log(nav[i].firstChild);
        }
        this.firstChild.style.backgroundColor = 'blue';
    }
}
//ajax
var xmlHttprequest;
		function getXmlHttpRequst() {
			// 不同浏览器获取对象xmlhttprequest方法不一样			
			if(window.ActiveXObject){
				xmlHttprequest = new ActiveXObject();
			}
			else{
				xmlHttprequest = new XMLHttpRequest();
			}
			return xmlHttprequest;
		}
		
		function checkUser() {
			var xmlHttprequest = getXmlHttpRequst();   // 一号线：创建对象
			// 判断xmlHttprequest对象是否创建成功
			if(xmlHttprequest) {
				// 通过xmlHttprequest对象发送请求到服务器
				var url = "/test1/a.php?username="+$("username").value;
				xmlHttprequest.open("get", url ,true);
				xmlHttprequest.onreadystatechange = chuli;  // 调用处理函数输出取得的值
				 // 二号线：发送数据 
				xmlHttprequest.send(null);                                     
			}
			else{
				alert("创建失败");
			}		
		}
		function $(id) {
			return document.getElementById(id);
		}
		function chuli(){
			if(xmlHttprequest.readyState == 4){
				// console.log(xmlHttprequest.responseText);
				$("myres").value = xmlHttprequest.responseText;
			}
		}

