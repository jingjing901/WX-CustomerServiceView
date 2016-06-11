/**
 * Created by tang on 2016/6/3.
 */
//弹框弹出关闭

$(function(){
    $("#deleatOrder").click(function(){
        $(".tankuang2").css("display","block");
        $(".content").css("opacity","0.2");
    })
    $(".tangkuangBtn").click(function(){
        $(".tankuang1").css("display","none");
        $(".tankuang2").css("display","none");
        $(".content").css("opacity","1");
    })
    $("#tuihuanhuo").click(function(){
        $(".tankuang1").css("display","block");
        $(".content").css("opacity","0.2");
    })
})