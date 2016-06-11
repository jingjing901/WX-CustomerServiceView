/**
 * Created by tang on 2016/6/2.
 */
$(function(){
    $("#save").click(function(){
        if($("#shouhuoPerson").val()==""){
            alert("请输入收货人姓名")
        }
        var mobile = document.getElementById("tel").value;
        var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if (!myreg.test(mobile)) {
            alert('请输入有效的手机号码！');
            return false;
        }
        if($("#delAddress").val()==""){
            alert("请输入详细收货地址")
        }
    })
})