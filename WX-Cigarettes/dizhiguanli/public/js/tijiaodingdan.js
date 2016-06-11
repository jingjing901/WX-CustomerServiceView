/**
 * Created by tang on 2016/6/3.
 */
$(function(){
    $("button[name=checkImg]").click(function(){
        $("img[name=imgCheck]").attr("src","../dizhiguanli/public/image/noCheck.png");
        $(this).find("img").attr("src","../dizhiguanli/public/image/check.png");
    })
    $("button[name=chenkPeisong]").click(function(){
        $("img[name=peisongImg]").attr("src","../dizhiguanli/public/image/noCheck.png");
        $(this).find("img").attr("src","../dizhiguanli/public/image/check.png");
    })
    $("button[name=daijinquan]").click(function(){
        $("img[name=daijinquanImg]").attr("src","../dizhiguanli/public/image/noCheck.png");
        $(this).find("img").attr("src","../dizhiguanli/public/image/check.png");
    })
})