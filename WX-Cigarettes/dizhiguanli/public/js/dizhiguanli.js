/**
 * Created by tang on 2016/6/2.
 */
$(function(){
    $("button[name=address]").click(function(){
        $("img[name=imgCheck]").attr("src","../image/shop_nocheck.png");
        $(this).find("img").attr("src","../image/shop_check.png");
    })
})