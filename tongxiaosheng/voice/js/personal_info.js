// 个人信息板块选项卡
    var tabs = $('tab')[0].getElementsByTagName('span');
    var contain = $('public');
    for(var i = 0; i < tabs.length; i++){
        tabs[i].index = i;
        tabs[i].onclick = function() {
            for(var j = 0; j < tabs.length; j++){
                tabs[j].style.backgroundColor = '';
                contain[j].style.display = 'none';
            }
            tabs[this.index].style.backgroundColor = 'rgb(126, 207, 245)';
            contain[this.index].style.display = 'block';
            console.log(contain[this.index])
        }
    }