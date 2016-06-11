/**
 * Created by Administrator on 2016/5/19 0019.
 * 商户登陆
 */

$(function(){
    $("#register").click(function(){
        if($("#lphoneNum").val()!=""&&$("#inputPassword").val()!=""){
            $("#stroeFrom").submit();
        }else{
            alert("请输入手机号码和密码");
        }
    });
});

/**
 * 商户注册
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
    var mobile = document.getElementById("lphoneNum").value;
    if(mobile ==""){
        alert("请输入您的手机号");
    } else{
        //设置button效果，开始计时
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
//证件信息验证
$(function(){
    $("#over").click(function(){
        var img  = ("img[name=photoPass]").src;
        //alert(img);
        if(("img[name=photoPass]").src == ""){
            alert("请完善您的信息！");
        }
    })
})

