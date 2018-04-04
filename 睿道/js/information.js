/*
* @Author: name
* @Date:   2018-02-02 10:39:03
* @Last Modified by:   name
* @Last Modified time: 2018-02-02 11:12:42
*/

// 案例详情页面 中间的swiper
var oInfor = new Swiper('.infor',{
  loop:true,
  loopedSlides:4,
  navigation: {
    nextEl: '.infor_next',
    prevEl: '.infor_prev',
  },
});

// 案例详情
 var oSmall = new Swiper('.small', {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  loop:true,
  loopedSlides:4,
  navigation: {
    nextEl: '.small_next',
    prevEl: '.small_prev',
  },
   slideToClickedSlide: true,//点击这个slide时，这个slide会居中
});

 // 让上下两个swiper相互控制，同时滑动
oInfor.controller.control = oSmall;
oSmall.controller.control = oInfor;