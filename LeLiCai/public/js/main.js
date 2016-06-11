$(function(){
	$("input[type='text']").not(".no").each(function(){
		$(this).placeholder();
	});
	$(".tabs").each(function(){
		$(this).tabs();
	});
	resize();
	$(window).resize(function(event) {
		resize();
	});










});

/*main*/
//

/*call*/
//
function resize(){
	var ht=$(window).height();
	$(".flht").height(ht);

	$(".header-smash-gold-eggs .ht").height($(window).width()/(720/550));
	$(".mainer-smash-gold-eggs .icon2").width($(".mainer-smash-gold-eggs .container2").width()+5);
	
	$(".header-red-envelope .height").height($(window).width()/(720/808));
	
	$(".footer-homepage .icon4-box").css("left",$(window).width()/(320/130));
            $(".homepage .login-box .p1 .a1").click(function(){
                $(".homepage .login").hide();
                $(".homepage .login-box").hide();
            });
            $(".homepage .header-homepage .container1 .a1").click(function(){
            	$("#bank").val('1');
                $(".homepage .login").show();
                $(".homepage .login-box").show();
            });
            $(".homepage .mainer-homepage .container2 .a1").click(function(){
            	$("#bank").val('2');
                $(".homepage .login").show();
                $(".homepage .login-box").show();
            });
            $(".homepage .mainer-homepage .container3 .a1").click(function(){
            	$("#bank").val('3');
                $(".homepage .login").show();
                $(".homepage .login-box").show();
            });
			$(".footer-activity-details .icon4-box").css("left",$(window).width()/(320/130));
			
			
	
	$(function () {
            $(".mainer-present .present-icon1").css("margin-top", $(window).width() / (720 / 20)).css("margin-left", $(window).width() / (720 / 51)).css("height", $(window).width() / (720 / 30));
            $(".mainer-present .container-icon1").height($(window).width() / (720 / 432));
            $(".mainer-present .present-icon-star").height($(window).width() / (720 / 78));
            $(".mainer-present .title p")
                    .width($(window).width() / (360 / 302) * 0.88)
                    .height($(window).width() / (720 / 61))
                    .css("line-height", ($(".mainer-present .present-icon-star").height() - 1) + "px");
            $(".mainer-present .c1-box").css("margin-top", $(window).width() / (720 / 29));
            $(".mainer-present .c1-icon").width($(window).width() / (720 / 217));
            $(".mainer-present .c1-bg1").height($(".mainer-present .c1-box-right").height() + 28);
            $(".mainer-present .c1-bg2").width($(".mainer-present .c1-box").width() - 8);
            $(".mainer-present .c2-box-right .right").width($(".mainer-present .c2-box-right").width()-45-63);
            $(".mainer-present .c2-box").css("margin-top", $(window).width() / (720 / 22));
            $(".mainer-present .c2-bg1").height($(".mainer-present .c2-box-right").height() + 25);
            $(".mainer-present .c2-bg2").width($(".mainer-present .c2-box").width()-18);
            $(".mainer-present .c3-box").css("margin-top", $(window).width() / (720 / 22));
            $(".mainer-present .c3-bg1").height($(".mainer-present .c3-box").height()+37);
            $(".mainer-present .c3-bg2").width($(".mainer-present .c3-box").width()+2);
        });
}
