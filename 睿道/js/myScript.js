// banner
 var oBanner = new Swiper('.banner',{
    loop:true,
    loopedSlides:3,
    pagination: {
        el: '.banner_pag',
        clickable:true,//可以点击分页器
      },
 });

// 服务领域
var oService_down = new Swiper('.service_down', {
  slidesPerView: 4,
  spaceBetween: 50,
  // init: false,
  pagination: {
    el: '.service_down_pag',
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    500: {
      slidesPerView: 1,
      spaceBetween: 10,
    }
  }
});

 // 判断分页器是否只有一个span标签，如果只有一个，就隐藏
 $(window).resize(function() {
    // 服务领域
    if($(".service_down_pag>span").length==1){
        $(".service_down_pag").css("display","none");
    }else if($(".service_down_pag>span").length>1){
        $(".service_down_pag").css("display","block");
    }
    // 服务优势
    if($(".advantage_pag>span").length==1){
        $(".advantage_pag").css("display","none");
    }else if($(".advantage_pag>span").length>1){
        $(".advantage_pag").css("display","block");
    }
    //易站通案例
     if($(".case_pag>span").length==1){
        $(".case_pag").css("display","none");
    }else if($(".case_pag>span").length>1){
        $(".case_pag").css("display","block");
    }
    // 网站建设
    if($(".design_pag>span").length==1){
        $(".design_pag").css("display","none");
    }else if($(".design_pag>span").length>1){
        $(".design_pag").css("display","block");
    }
    // 小程序
    if($(".apps_pag>span").length==1){
        $(".apps_pag").css("display","none");
    }else if($(".apps_pag>span").length>1){
        $(".apps_pag").css("display","block");
    }
    // 三种主流注册模式
    if($(".model_pag>span").length==1){
        $(".model_pag").css("display","none");
    }else if($(".model_pag>span").length>1){
        $(".model_pag").css("display","block");
    }
 });
// 全网营销 点击服务小标题 给它添加class
 $(".serve_title li").each(function() {
    $(this).click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
});

 //网站建设与营销案例 点击小的导航时切换样式 滑动到对应的slide
//滑动时也切换小的导航
 var oCases = new Swiper('.cases',{
    on:{
        slideChangeTransitionEnd:function(){
          var number=oCases.activeIndex;//slide.activeIndex 切换结束时，告诉我现在是第几个slide
          console.log(number);
          $(".title>li").eq(number).addClass("active").siblings().removeClass('active');
        }
      },
 });

$(".title li").each(function() {
    $(this).click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        oCases.slideTo($(this).index(),500,false);
    })
});

// 服务优势
var oAdvantage = new Swiper('.advantage',{
    slidesPerView:5,
    spaceBetween: 20,
    pagination: {
        el: '.advantage_pag',
        clickable:true,//可以点击分页器
      },
    breakpoints: {
        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        500: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }
});

// 鼠标放在合作伙伴上时，换图
$(".partner_img").hover(function(){
    $(this).stop().animate({top:'-140px'}, 'fast')
},function(){
    $(this).stop().animate({top:'0'}, 'fast')
});

//易站通案例
var oSpecificCase = new Swiper('.specificCase', {
  slidesPerView: 3,
  spaceBetween: 20,
  // init: false,
  pagination: {
    el: '.case_pag',
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 10,
    }
  }
});


//网站建设
var oDesign = new Swiper('.design', {
  slidesPerView: 4,
  spaceBetween: 50,
  // init: false,
  pagination: {
    el: '.design_pag',
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    500: {
      slidesPerView: 1,
      spaceBetween: 10,
    }
  }
});

// 合作流程
$(".flow_box dt").each(function() {
  $(this).click(function(){
    $(this).nextAll().slideToggle();
  })
});

// 小程序
var oApps = new Swiper('.apps', {
  slidesPerView: 4,
  spaceBetween: 50,
  // init: false,
  pagination: {
    el: '.apps_pag',
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1000: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    678: {
      slidesPerView: 1,
      spaceBetween: 10,
    }
  }
});

// 三种主流注册模式
var oModel = new Swiper('.model', {
  slidesPerView: 3,
  spaceBetween: 50,
  // init: false,
  pagination: {
    el: '.model_pag',
    clickable: true,
  },
  breakpoints: {
    1000: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    678: {
      slidesPerView: 1,
      spaceBetween: 10,
    }
  }
});

// 新闻动态
var oNews_left_swiper = new Swiper('.news_left_swiper', {
  pagination: {
    el: '.news_pag',
  },
});

// 新闻列表
var oNews_list = new Swiper('.news_list', {
  pagination: {
    el: '.news_list_pag',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
});