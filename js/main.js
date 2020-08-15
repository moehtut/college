
var browserWindow = $(window);

// Init AOS
AOS.init();

// Sticky Nav
$(document).ready(function(){
  // $('.stickybar').sticky({topSpacing: 0});
  var sticky= new Waypoint.Sticky({
    element: $('.stickybar')[0]
  });
});

/* View Preloader
* ----------------------------------------------------- */
browserWindow.on('load', function () {
  $('.preloader').fadeOut('slow', function () {
      $(this).remove();
  });
});

/* Count Number */

$('.list-number').countUp({
  delay: 10,
  time: 2000
});
$(document).ready(function(){
  $('#password').hideShowPassword({
    show: false,
    innerToggle: 'focus',
    toggle: {
      className:'my-toggle'
    },
    attr: {
      role: 'button',
      'aria-label': 'Show Password',
      title: 'Show Password',
      tabIndex: 1
    },
    wrapper: {
      element: '<div>',
      className: 'wrap'
    },
    states: {
      shown: {
        toggle: {
          content: ' <i class="fa fa-eye-slash"></i>'
        }
      },
      hidden: {
        toggle: {
          content: ' <i class="fa fa-eye"></i>'
        }
      }
    }
  });
  $('#comfirm-password').hideShowPassword({
    show: false,
    innerToggle: 'focus',
    toggle: {
      className:'my-toggle'
    },
    attr: {
      role: 'button',
      'aria-label': 'Show Password',
      title: 'Show Password',
      tabIndex: 1
    },
    wrapper: {
      element: '<div>',
      className: 'wrap'
    },
    states: {
      shown: {
        toggle: {
          content: ' <i class="fa fa-eye-slash"></i>'
        }
      },
      hidden: {
        toggle: {
          content: ' <i class="fa fa-eye"></i>'
        }
      }
    }
  });



})

/* ScrollUp */
browserWindow.scrollUp({
  scrollName: 'scrollUp',
  scrollSpeed: 1000,
  animation: 'fade',
  animationInSpeed: 200,
  animationOutSpeed: 200,
  scrollText: '<i class="fa fa-angle-up"></i>'
  
});



/* Dark Mode */
const darkOptions = {
  bottom: '30px',
  right: 'unset',
  left: '32px',
  time: '0.5',
  mixColor: '#fff',
  backgroundColor: '#222627',
  buttonColorDark: '#ccc',
  buttonColorLight: '#000',
  saveInCookies: false,
  label: '<i class="fas fa-adjust fa-spin "></i>',
  autoMatchOsTheme: true

}

const darkmode = new Darkmode(darkOptions);
darkmode.showWidget();  
/* Scrollbar */

$(document).ready(function(){

  Scrollbar.init(document.querySelector('.third-section'),{
    damping: 0.05
    // alwaysShowTracks: true
  });

})

/* Carousel */

$(document).ready(function(){
  
  // Showcase Swiper
  var showcaseSwiper = new Swiper('.showcase-swiper',{
    loop: true,
    slidesPerView: 1,
    // autoHeight: true,
    // lazy: true,

    keyboard: {
      enabled: true,
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      1200: {
        slidesPerView: 1,
      }
    },
  
  })

  // Course Swiper
  var courseSwiper = new Swiper('.course-swiper',{
    loop: true,
    slidesPerView: 1,
    // autoHeight: true,
    // lazy: true,
    parallax: true,

    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 2,
      }
    },
  })

  // Opinion Swiper
  var opinionSwiper = new Swiper('.opinion-swiper',{
    loop: true,
    slidesPerView: 1,
    // autoHeight: true,
    // lazy: true,

    keyboard: {
      enabled: true,
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      1200: {
        slidesPerView: 1,
      }
    },
  
  })

  // Event Swiper
  var eventSwiper = new Swiper('.event-swiper',{
    loop: true,
    slidesPerView: 1,
    // autoHeight: true,
    // lazy: true,
    parallax: true,

    keyboard: {
      enabled: true,
    },

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 2,
      }
    },
  
  })

  // Blog Swiper
  var blogSwiper = new Swiper('.blog-swiper',{
    loop: true,
    slidesPerView: 1,
    // autoHeight: true,
    // lazy: true,

    keyboard: {
      enabled: true,
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // breakpoints: {
    //   1200: {
    //     slidesPerView: 1,
    //   }
    // },
  
  })

  // Team Swiper
  var teamSwiper = new Swiper('.team-swiper',{
    loop: true,
    slidesPerView: 1,
    // parallax: true,
    // autoHeight: true,
    // lazy: true,

    keyboard: {
      enabled: true,
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      992: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1,
      }
    },
  
  })
  
  // Partner Swiper
  var partnerSwiper = new Swiper('.partner-swiper',{
    loop: true,
    slidesPerView: 2,
    // autoHeight: true,
    lazy: true,

    keyboard: {
      enabled: true,
    },

    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 2,
      }
    },
  
  })


});

/* Gallery */
// $(document).ready(function(){
//   $('#gallery').magnificPopup({
//     delegate: 'a',
//     type: 'image',
//     gallery: {
//       enabled:true
//     }
//   })
// })


