/**
 * Created by Administrator on 2016/5/21 0021.
 */
$(function(){
    $("button[name=address]").click(function(){
        $("img[name=imgCheck]").attr("src","../image/shop_nocheck.png");
        $(this).find("img").attr("src","../image/shop_check.png");
    })
})