/**
 * Created by tang on 2016/6/2.
 */
$(function(){
    $("#fujindianpu").click(function(){
        $(".storeFuJin").css("display","block");
        $(".toumingdu").css("opacity","0.16")
        $(".toumingdu").attr("disabled","disabled")
    })
    $("#allStore").click(function(){
        $(".storeFuJin").css("display","none");
        $(".toumingdu").css("opacity","1")
        $(".toumingdu").attr("disabled","")
    })
    $(".fujindis li").click(function(){
        $(".storeFuJin").css("display","none");
        $(".toumingdu").css("opacity","1")
        $(".toumingdu").attr("disabled","")
    })
})