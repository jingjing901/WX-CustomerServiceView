/**
 * Created by tang on 2016/6/3.
 */
$(function(){
    $("li[name=checkedLi]").click(function(){
        $("li[name=checkedLi]").removeClass("active");
        $(this).addClass("active");
    })
})