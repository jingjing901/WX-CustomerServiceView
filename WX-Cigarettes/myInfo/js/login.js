/**
 * Created by Administrator on 2016/4/27.
 */
function check(){
    var phoneNum = document.getElementById("lphoneNum").value;
    $.ajax({
        url:"<%=basePath %>Ask/updateAnswer.do",
        type:"post",
        data:{"phone":phoneNum},
        dataType:"json",
        success:function(data){
        if(data == true){
          alert("该手机号尚未注册！")
        }
    }
})
}

var InterValObj; //timer变量，控制时间
var count = 300; //间隔函数，1秒执行
var curCount; //当前剩余秒数

function sendMessage(){
    curCount = count;
    var mobile = document.getElementById("phoneNum").value;
    if(mobile ==""){
        alert("请输入您的手机号");
    } else{
        //　　//设置button效果，开始计时
        $("#getCode").attr("disabled", "true");
        $("#getCode").val(curCount + "s");
        InterValObj = window.setInterval(SetRemainTime, 1000);
        //启动计时器，1秒执行一次
        //　　  向后台发送处理数据
    }
}

//timer处理函数
function SetRemainTime() {
    if (curCount == 0) {
        window.clearInterval(InterValObj);//停止计时器
        $("#getCode").removeAttr("disabled");//启用按钮
        $("#getCode").val("重新发送");
    }
    else {
        curCount--;
        $("#getCode").val(curCount + "s");
    }
}


$("#quitLogin").click(function(){
    $("#pagetwo").css("display","block");
    $("#pageone").css("display","none");
    $("#quitLogin").removeClass("btnstyleNoBg");
    $("#normalLogin").removeClass("btnstyleYesBg");
    $("#quitLogin").addClass("btnstyleYesBg");
    $("#normalLogin").addClass("btnstyleNoBg");
})
$("#normalLogin").click(function(){
    $("#pagetwo").css("display","none");
    $("#pageone").css("display","block");
    $("#normalLogin").removeClass("btnstyleNoBg");
    $("#quitLogin").removeClass("btnstyleYesBg");
    $("#normalLogin").addClass("btnstyleYesBg");
    $("#quitLogin").addClass("btnstyleNoBg");
})
