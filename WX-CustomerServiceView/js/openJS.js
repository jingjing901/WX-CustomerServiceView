function check() {
    var txt = document.getElementById("text").value;
    textlegth = txt.length;
    if (txt.length > 300)
        alert("您好，输入字数不能超过300！");
}
//重置密码验证
function rcheckpassword(){
    var pwd = document.getElementById("oldpw");
    var rpwd = document.getElementById("pw");
    var npwd = document.getElementById("newpw");
    if(pwd.value ==""){
        alert("密码不能为空！");
    }else{
        if(rpwd.value==""){
            alert("请您输入重复的密码！")
        }else{
            if(pwd.value != rpwd.value){
                alert("两次密码不一致，请重新输入");
            }else{
                if(npwd.value==""){
                    alert("请输入新密码！")
                }
            }
        }
    }
}
//获取文本域字数
function tjzs(){
    var count = $("#text").val().length;
    if(count>300){
        var text = $("#text").val().substring(0,300);
        $("#text").val(text);
        count=300;
    }
    $("#zs").val(count);
    $("#pp").val("count");
}
//清楚功能
//用于清除输入框中提示信息的方法
function clearTip(){
    var bFlag=true;//全局变量,用于判断是否允许清除文本框内容
    var oTxt=document.getElementById("text");
    if(bFlag==true){
        oTxt.value="";
        bFlag=false;
    }else{

    }
}
//公开，不公开选中图片切换功能
 //$(document).ready(function(){
//    $("#open").click(function () {
//        //alert("hahh");
//        $("#openimage").attr("src","image/Checked.png");
//        $("#unopenimage").attr("src","image/Unchecked.png");
//    })
//})
//$(document).ready(function(){
//    $("#unopen").click(function () {
//        $("#openimage").attr("src","image/Unchecked.png");
//        $("#unopenimage").attr("src","image/Checked.png");
//        //alert("hehe");
//    })
//})
//openqesdtion
$(document).ready(function(){
    $("#opq").click(function(){
        $("#myQuestion,#quiz,#setting").css("display","none");
        $("#openQuestion").css("display","block");
        $("#myq,#qa,#sz").css({"background":"white","color":"#04bf60"});
        $("#opq").css({"background":"#03c05f","color":"white"});
    })
})
$(document).ready(function(){
    $("#myq").click(function(){
        $("#openQuestion,#quiz,#setting").css("display","none");
        $("#myQuestion").css("display","block");
        $("#opq,#qa,#sz").css({"background":"white","color":"#04bf60"});
        $("#myq").css({"background":"#03c05f","color":"white"});
    })
})
$(document).ready(function(){
    $("#qa").click(function(){
        $("#openQuestion,#myQuestion,#setting").css("display","none");
        $("#quiz").css("display","block");
        $("#myq,#opq,#sz").css({"background":"white","color":"#04bf60"});
        $("#qa").css({"background":"#03c05f","color":"white"});
    })
})
$(document).ready(function(){
    $("#sz").click(function(){
        $("#openQuestion,#myQuestion,#quiz").css("display","none");
        $("#setting").css("display","block");
        $("#myq,#qa,#opq").css({"background":"white","color":"#04bf60"});
        $("#sz").css({"background":"#03c05f","color":"white"});
    })
})
function loadXMLDoc(){
    var xmlhttp;
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }else{
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState==4 && xmlhttp.status == 200){
            document.getElementById("nr").innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET","SopenQuestion.html",true);
    xmlhttp.send();
}

$(document).ready(function(){
    var temp = [
        {name:"问:手机订烟是否支持信用卡?",time:"13:53",id:1},
        {name:"问:手机订烟是否支持信用卡?",time:"13:53",id:2},
        {name:"问:手机订烟是否支持信用卡?",time:"13:53",id:3},
        {name:"问:手机订烟是否支持信用卡?",time:"13:53",id:4},
        {name:"问:手机订烟是否支持信用卡?",time:"13:53",id:5},
        {name:"问:手机订用卡?",time:"13:53",id:6},
        {name:"问:手机订烟是否支持信用卡?",time:"13:53",id:7}
    ]
    for(var i= 0;i<temp.length;i++){
        var dom = document.createElement("li");
        dom.innerHTML = temp[i].name + "<span class='time'>"+temp[i].time+"</span>"+
        $(dom).addClass("questionp");
        var id = temp[i].id;
        dom.setAttribute("id",id);
        dom.setAttribute("onclick","changecolor("+id+")");
        document.getElementById("ul").appendChild(dom);
    }
})
function changecolor(value){
    $("li").removeClass("a")
    $("li").addClass("b");
    $("#"+value).addClass("a") //
}