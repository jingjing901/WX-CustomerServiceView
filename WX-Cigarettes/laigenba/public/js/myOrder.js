/**
 * Created by tang on 2016/6/1.
 */
$(function(){
    $(".titleLi li").click(function(){
        $(".titleLi li").removeClass("active");
        $(this).addClass("active");
    })
    $("input[name=deleatOrder]").click(function(){
        $(".deleatOrder").css("display","block");
        $(".content").css("opacity","0.2")
    })
    $(".btn").click(function(){
        $(".deleatOrder").css("display","none");
        $(".content").css("opacity","1")
    })
})

