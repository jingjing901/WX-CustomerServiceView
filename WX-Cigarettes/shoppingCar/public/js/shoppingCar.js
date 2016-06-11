/**
 * Created by tang on 2016/5/30.
 */
$(function(){
    var uls = $("form ul");
    $(uls).each(function(index, e) {
        var currentUl = $(this);
        var goodsli = $(this).find("li button img");
        $(this).find("img:first").click(function(){
            var srcValue = $(this).attr("src");
            if(srcValue.indexOf("shop_check")>-1){
                $(this).attr("src",srcValue.replace("shop_check", 'shop_nocheck'));
            }else{
                $(this).attr("src",srcValue.replace("shop_nocheck", 'shop_check'));
            }
            $(e).find("li button img").attr("src",$(this).attr("src"));
        });

        $(this).find('li button img').click(function() {
            var srcValue = $(this).attr("src");
            if(srcValue.indexOf("shop_check.png")==-1){
                $(this).attr("src",srcValue.replace("shop_nocheck", 'shop_check'));
                $(currentUl).find("img:first").attr("src",$(this).attr("src"));
            }else{
                $(this).attr("src",srcValue.replace("shop_check", 'shop_nocheck'));
                var checkAll = true;
                for(var i=0;i<goodsli.length;i++){
                    if($(goodsli[i]).attr("src").indexOf("shop_check")!=-1){
                        checkAll = false;
                    }
                }
                if(checkAll==true){
                    $(currentUl).find("img:first").attr("src",$(this).attr("src"));
                }
            }
        });
        //隐藏最后一个li的底线
        $(this).find("li:last .goodA").css("border-bottom","none");
    });
});