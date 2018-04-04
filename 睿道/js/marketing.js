/*
* @Author: name
* @Date:   2018-02-01 17:07:12
* @Last Modified by:   name
* @Last Modified time: 2018-02-01 21:59:20
*/


// 全网营销上面的swiper
var oMarketing_up = new Swiper('.marketing_up', {
  slidesPerView: 6,
  spaceBetween: 0,
  slideToClickedSlide: true,
  // init: false,
  breakpoints: {
    1200: {
      slidesPerView:5,
      spaceBetween: 0,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 0,
    }
  }
});
// 点击上面的swiper  给它加class
$(".marketing_up .swiper-slide").each(function() {
   $(this).click(function(){
    $(this).addClass("active swiper-slide-active").siblings().removeClass('active swiper-slide-active');
    oMarketing_down.slideTo($(this).index(),1000,false);
   })
});
// 全网营销下面的swiper
var oMarketing_down = new Swiper('.marketing_down',{
  on: {
    slideChangeTransitionEnd: function(){
      // alert(oMarketing_down.activeIndex);
      //切换结束时，告诉我现在是第几个slide
      var a=oMarketing_down.activeIndex;
      $(".marketing_up .swiper-slide").eq(a).addClass("active swiper-slide-active").siblings().removeClass('active swiper-slide-active');
    },
  },

});
// 让上下两个swiper相互控制，同时滑动
oMarketing_down.controller.control = oMarketing_up;
oMarketing_up.controller.control = oMarketing_down;