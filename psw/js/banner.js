// banner
var mySwiper = new Swiper ('.banner', {
    loop: true,
    autoplay:true,
    effect : 'fade',
    speed:1000,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.next1',
      prevEl: '.prev1',
    },

  })  