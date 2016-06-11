/**
 * Created by Administrator on 2016/4/25.
 */
function checked(){
    var pw = document.getElementById("inputPassword").value;
    var rpw = document.getElementById("rinputPassword").value;
    var mobile = document.getElementById("phoneNum").value;
    var code = document.getElementById("code").value;
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    var agreement = document.getElementById("agreement");
    var pwReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
    $.ajax({
        //url:"<%=basePath %>Ask/updateAnswer.do",
        type:"post",
        data:{"phone":mobile},
        dataType:"json",
        success:function(data){
            if(data == false){
                alert("该手机号已注册！");
                mobile =="";
            }
        }
    })
    if (!myreg.test(mobile)) {
        alert('请输入有效的手机号码！');
        return false;
    }
    if(!pwReg.test(pw)){
        alert('密码格式不正确！');
        return false;
    }
    if (pw == "") {
        alert("请输入密码!");
        return false;
    }else{
        if(rpw==""){
            alert("请输入确认密码!");
            return false;
        } else{
            if(pw!=rpw){
                alert("两次密码输入不一致!");
                return false;
            }
        }
    }
    if(code==""){
        alert("请输入验证码！");
        return false
    }
    if(agreement.checked){
       return true;
    }else{
        alert("请勾选同意《用户注册协议》！");
        return false;
    }
}


var InterValObj; //timer变量，控制时间
var count = 60; //间隔函数，1秒执行
var curCount; //当前剩余秒数

function sendMessage(){
    curCount = count;
    var mobile = document.getElementById("phoneNum").value;
    if(mobile ==""){
        alert("请输入您的手机号");
    } else{
        //　　//设置button效果，开始计时
        $("#getcode").attr("disabled", "true");
        $("#getcode").val(curCount + "s");
        InterValObj = window.setInterval(SetRemainTime, 1000);
        //启动计时器，1秒执行一次
        //　　  向后台发送处理数据
        alert();
    }
}

//timer处理函数
function SetRemainTime() {
    if (curCount == 0) {
        window.clearInterval(InterValObj);//停止计时器
        $("#getcode").removeAttr("disabled");//启用按钮
        $("#getcode").val("重新发送");
    }
    else {
        curCount--;
        $("#getcode").val(curCount + "s");
    }
}
function getCode(){
    //alert();
    $.ajax({
        url:"${base}/admin/sms!sendSms.action",
        type:"post",
        data:{"username":mobile},
        dataType:"text",
        success:function(data){
            alert(data);
        }
    });
}

