// JavaScript Document

window.onload=function(){
	 $(".logo").mouseenter(function(){
		 $(".logo img").attr("src","img/logo1.png");
         }).mouseleave(function(){
		 $(".logo img").attr("src","img/logo.png");
         });
	 
	 $(".item").mouseenter(function(){
	     $(this).addClass("item-active").animate({top:"-2px"},200);
	     }).mouseleave(function(){
	     $(this).animate({top:"0"},200).removeClass("item-active");
	     });
	 $(".item_one").mouseenter(function(){
	     $(this).addClass("item-active").animate({top:"-2px"},200);
	     }).mouseleave(function(){
	     $(this).animate({top:"0"},200).removeClass("item-active");
	     });
	 $(".item_two").mouseenter(function(){
	     $(this).addClass("item-active").animate({top:"-2px"},200);
	     }).mouseleave(function(){
	     $(this).animate({top:"0"},200).removeClass("item-active");
	     });

	 $(".tab_left").mouseenter(function(){
	     $(this).addClass("item-active").animate({top:"-2px"},200);
	     }).mouseleave(function(){
	     $(this).animate({top:"0"},200).removeClass("item-active");
	     });
//xm_carousel_wrapper.animate({left:-1226},500);
     $(".clear li").hover(function(){
		 $(this).find(".review_wrapper_one").slideToggle(150);
         },(function(){
	     $(this).find(".review_wrapper_one").slideToggle(150);
         }))
		           
//     $(".clear li").hover(function(){
//		 $(this).find(".review_wrapper").slideUp(300);
//
//		 },(function(){
//		 $(this).find(".review_wrapper").hide();
//
//		 })
//         )
	 
     $(".top-cart").mouseenter(function(){
		 $(".top-cart img").attr("src","img/cart-ea990b.png");
		 $(".top-cart").addClass("gouwuchexin");
		 $(".top-cart span").addClass("gouwuchexin");
//		 $(".top-cart>div").addClass("gouwuchecontent");
		 $(".top-cart>div").stop(true,false).slideDown(200);
		 }).mouseleave(function(){
		 $(".top-cart>div").slideUp(300,function(){
		 $(".top-cart img").attr("src","img/cart-fff.png");
		 $(".top-cart").removeClass("gouwuchexin");
		 $(".top-cart span").removeClass("gouwuchexin"); 
//		 $(".top-cart>div").removeClass("gouwuchecontent");
		 })
		 })
	 
	 $(".search .search-bth").mouseenter(function(){	
	     $(".search img").attr("src","img/search6700.png");
		 $(".search img").addClass("bthplace");
		 $(".search .search-input").addClass("search_input_hover");
	     }).mouseleave(function(){	 
	 	 $(".search .search-input").removeClass("search_input_hover");
		 $(".search img").removeClass("bthplace");
		 $(".search img").attr("src","img/search.png");
	     })
      


     $(".search .search-input").focus(function(){
	     $(".search .search-input").addClass("search-input-focus");
		 $(".search .search-bth").addClass("search-input-focus");
		 $(".search .searchdown").addClass("gouwuchecontent");
		 $(".valuestyle").addClass("gouwuchecontentone");
     }).blur(function(){
	     $(".search .search-input").removeClass("search-input-focus");
		 $(".search .search-bth").removeClass("search-input-focus");
		 $(".search .searchdown").removeClass("gouwuchecontent");
		 $(".valuestyle").removeClass("gouwuchecontentone");
     })

     $(".nav li").hover(function(){
		  $(this).find(".navextend").show();
	  },function(){
		  $(this).find(".navextend").hide();
	  });
        

	  $(".big_banner_wrap li").hover(function(){
		  $(this).find(".banner_menu_content").show();
	  },function(){
		  $(this).find(".banner_menu_content").hide();
	  });



//轮播
$(function(){
    var i=0;
    var big_banner_pic = $(".big_banner_pic");
    var allimg=$(".big_banner_pic li").length;
    function img_change(){
        var img_i=i*-1226+"px";
        big_banner_pic.animate({opacity:"0.3"},200,function(){
            big_banner_pic.css("left",img_i );
            big_banner_pic.animate({
                opacity: "1"
            }, 100);
        })
    }
    function automatic(){
        i+=1;
        if(i>=allimg){
            i=0;
        }
        img_change();
    }
    change_self_time = setInterval(automatic, 5000); 
	//setInterval() 方法可按照指定的周期(以毫秒计)来调用函数或计算表达式。此方法会不停的调用函数。
    //轮播上一张下一张图标控制
    $(".big_banner_change_wrap").hover(function(){
        $(".big_banner_change_wrap").children().show();
    },function(){
        $(".big_banner_change_wrap").children().hide();
    })

    $(".big_banner_change_prev").click(function(){
        i -= 1;
        if (i < 0) {
            i = allimg - 1;
        }
        img_change();
    })
    $(".big_banner_change_next").click(function(){
        i += 1;
        if (i >= allimg) {
            i = 0;
        }
        img_change();
    })
})

$(function(){
    var l = 0;
    var xm_carousel_wrapper = $(".xm_carousel_wrapper");
    function img_changf(){
		if(l < 1){
          xm_carousel_wrapper.animate({left:-1226},500);
	 	  $(".arrow_l i").css("color","#ece6e3");
		  $(".arrow_r i").css("color","#b0b0b1");
		  l = 1;
	    }
		else
		{
		  xm_carousel_wrapper.animate({left:0},500);
		  $(".arrow_r i").css("color","#ece6e3");
		  $(".arrow_l i").css("color","#b0b0b1");
		  l = 0;
		}   
	}
     change_self_timeone = setInterval(img_changf, 5000);
	//setInterval() 方法可按照指定的周期(以毫秒计)来调用函数或计算表达式。此方法会不停的调用函数。
    //轮播上一张下一张图标控制

    $(".arrow_r i").click(function(){
		$(".arrow_r i").css("color","#ece6e3");
		$(".arrow_l i").css("color","#b0b0b1");
        xm_carousel_wrapper.stop().animate({left:0},500);
		l = 0;
    })
    $(".arrow_l i").click(function(){
		$(".arrow_l i").css("color","#ece6e3");
		$(".arrow_r i").css("color","#b0b0b1");
        xm_carousel_wrapper.stop().animate({left:-1226},500);
		l = 1;
	})
})

$(function(){
   $('#tab_one').on('mouseenter','li',function(){
   $(this).addClass('tab_active').siblings().removeClass('tab_active');
   var index=$(this).index();
   $('.item_wrap>ul').eq(index).show().siblings().hide();
});
});

$(function(){
   $('#tab_two').on('mouseenter','li',function(){
   $(this).addClass('tab_active').siblings().removeClass('tab_active');
   var index=$(this).index();
   $('#item_wrap_two>ul').eq(index).show().siblings().hide();
});
});

$(function(){
   $('#tab_three').on('mouseenter','li',function(){
   $(this).addClass('tab_active').siblings().removeClass('tab_active');
   var index=$(this).index();
   $('#item_wrap_three>ul').eq(index).show().siblings().hide();
});
});

$(function(){
   $('#tab_four').on('mouseenter','li',function(){
   $(this).addClass('tab_active').siblings().removeClass('tab_active');
   var index=$(this).index();
   $('#item_wrap_four>ul').eq(index).show().siblings().hide();
});
});

$(function(){
   $('#tab_five').on('mouseenter','li',function(){
   $(this).addClass('tab_active').siblings().removeClass('tab_active');
   var index=$(this).index();
   $('#item_wrap_five>ul').eq(index).show().siblings().hide();
});
});


(function($){
    $.fn.Carousel=function(options){
        var dft={
            div:$('.xm-carousel-wrapper'),
            ul:$('.main-banner'),
            next:$('.arrow-l'),
            pre:$('.arrow-r'),
            btn:$('.arrow'),
            num:1,
            dot:null,
            left:0,
            leftA:0,
            startIndex:0,
            currentIndex: 0,
            t:8000,
            timer:null,
            auto:true
        };
      $.extend(dft,options);
        return this.each(function(){
            $(dft.btn).hover(
                function(){
                    stop();
                },
                function(){
                    if(dft.auto===true){
                        start();
                    }
                });
            $(dft.pre).click(function(){
                if(dft.currentIndex==0){
                    return false;
                }
                {
                    dft.startIndex = dft.currentIndex;
                    dft.currentIndex = --dft.currentIndex % dft.ul.length;
                    if(dft.dot===null) {
                        dft.pre.addClass('disable').siblings().removeClass('disable');
                    }else{

                        dft.dot.eq(dft.currentIndex).addClass('pager-active').siblings().removeClass('pager-active');
                    }
                    dft.left = "-100%";
                    dft.leftA = "100%";
                    play(dft.left, dft.leftA);
                }
            });
            $(dft.next).click(function(){
                if(dft.currentIndex==dft.num){
                    return false;
                }
                {
                    dft.startIndex = dft.currentIndex;
                    dft.currentIndex = ++dft.currentIndex % dft.ul.length;
                    if(dft.dot===null){
                            dft.next.addClass('disable').siblings().removeClass('disable');
                    }else{
                        dft.dot.eq(dft.currentIndex).addClass('pager-active').siblings().removeClass('pager-active');
                    }
                    dft.left = "100%";
                    dft.leftA = "-100%";
                    play(dft.left, dft.leftA);
                }
            });
            if(dft.dot!==null){
               dft.dot.click(function(){
                    dft.startIndex=dft.currentIndex;
                    dft.currentIndex=$(this).index();
                    if(dft.currentIndex>dft.startIndex){
                        dft.left = "100%";
                        dft.leftA = "-100%";
                        dft.dot.eq(dft.currentIndex).addClass('pager-active').siblings().removeClass('pager-active');
                        play(dft.currentIndex, dft.startIndex);
                    }else{
                        dft.left = "-100%";
                        dft.leftA = "100%";
                        dft.dot.eq(dft.currentIndex).addClass('pager-active').siblings().removeClass('pager-active');
                        play(dft.currentIndex, dft.startIndex);
                    }
                });
            }
            function play(){
                dft.ul.eq(dft.currentIndex).css({left: dft.left}).stop().animate({left: 0});
                dft.ul.eq(dft.startIndex).css({left: 0}).stop().animate({left: dft.leftA});
            }
            function start() {
                dft.timer = setInterval(function () {
                    if(dft.currentIndex!==dft.num) {
                        dft.next.triggerHandler("click");
                    }else{
                        dft.pre.triggerHandler("click");
                    }
                },dft.t);
            }
            function stop(){
                clearInterval(dft.timer);
            }
            if(dft.auto===true){
                start();
            }
        });
    }
})(jQuery);
$(function(){
$('.xm-carousel-wrapper-1').Carousel({
    ul:$('#book').find('li'),
    next:$('.control-next '),
    pre:$('.control-prev'),
    num:2,
    dot:$('.rainbow-item-1').find('.pager'),
    auto:false
});

$('.xm-carousel-wrapper-2').Carousel({
    ul:$('#mi').find('li'),
    next:$('.control-next-1'),
    pre:$('.control-prev-1'),
    num:3,
    dot:$('.rainbow-item-2').find('.pager'),
    auto:false
});

$('.xm-carousel-wrapper-3').Carousel({
    ul:$('#gm').find('li'),
    next:$('.control-next-2'),
    pre:$('.control-prev-2'),
    num:3,
    dot:$('.rainbow-item-3').find('.pager'),
    auto:false
});

$('.xm-carousel-wrapper-4').Carousel({
    ul:$('#app').find('li'),
    next:$('.control-next-3'),
    pre:$('.control-prev-3'),
    num:3,
    dot:$('.rainbow-item-4').find('.pager'),
    auto:false
});

$('.container_two').on('mouseenter','.item',function(){
    $(this).find('.arrow').on('mouseenter','a',function(){
        $(this).addClass('change');
    })
}).on('mouseleave','.item',function(){
    $(this).find('.arrow').on('mouseleave','a',function(){
        $(this).removeClass('change');
    })
});
});

//video
$(function(){
$('.video_list').on('click','li',function(){
    var index=$(this).index();
    var content=$(this).find('h3').text();
    $(".modal-hd").find('h3').html(content);
    $('.modal-bd').find('video').eq(index).show().siblings().hide();
    $('.modal').fadeIn();
});

$('.close').click(function(){
    $('.modal').fadeOut();
   $('video').trigger('pause');
});
var videoyin = document.getElementById("bgAudio").volume = 0.5;
var videoyin = document.getElementById("bgAudio1").volume = 0.5;
var videoyin = document.getElementById("bgAudio2").volume = 0.5;
var videoyin = document.getElementById("bgAudio3").volume = 0.5;
});
};