$(document).ready(function() {	

	// Scroll to Top
	$(".scrolltotop").click(function(){
      $("html").animate({"scrollTop" : "0px"}, 1200);
    });
    jQuery(window).scroll(function(){
      var upto = jQuery(window).scrollTop();
      if(upto > 500) {
          jQuery('.scrolltotop').fadeIn(700);
      } else {
          jQuery('.scrolltotop').fadeOut(700);
      }
  });

  // wow js hook -----------
  new WOW().init();

  // particlesJS
  particlesJS("particles-container", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#C1C0BF" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 }
      },
      opacity: {
        value: 0.5,
        random: false
      },
      size: {
        value: 3, 
        random: true
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#C1C0BF",
        opacity: 0.2,
        width: 2 
      },
      move: {
        enable: true,
        speed: 4,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });

  // button hover effect 
  $( ".button_su_inner" ).mouseenter(function(e) {
    var parentOffset = $(this).offset(); 
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
    $(this).prev(".su_button_circle").removeClass("desplode-circle");
    $(this).prev(".su_button_circle").addClass("explode-circle");
  });
  $( ".button_su_inner" ).mouseleave(function(e) {
    var parentOffset = $(this).offset(); 
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
    $(this).prev(".su_button_circle").removeClass("explode-circle");
    $(this).prev(".su_button_circle").addClass("desplode-circle");
  });

  // Dark Mode
  $(".dark-btn a").click(function() {
    $("body").toggleClass("dark");
    const icon = jQuery(this).find("i");
    if (icon.hasClass("fa-moon")) {
      icon.removeClass("fa-moon").addClass("fa-sun");
    } else {
      icon.removeClass("fa-sun").addClass("fa-moon");
    }
  });

  // Hamburger Icon
  $(".nav-icon").click(function(){
    $(this).toggleClass('open');
  });

  // Menu Accordion
  $(".mobile-sidebar-items a").click(function (e) {
  e.preventDefault(); 
  const isActive = $(this).hasClass("active");
  $(".mobile-sidebar-items a").removeClass("active").find("i").removeClass("rotate");
  $(".mobile-sidebar-items .mobile-sub-menu").slideUp(400);
  if (!isActive) {
      $(this).addClass("active").find("i").addClass("rotate");
      $(this).next(".mobile-sub-menu").slideDown(400);
  }
  });

  // Mobile Sidebar
  $(".nav-icon").click(function() {
    $(".mobile-sidebar").toggleClass("mobile-sidebar-active");
  });

  // menu area stikcy
  jQuery(window).scroll(function() {
    var srcollTopValue = jQuery(window).scrollTop();
    if (srcollTopValue > 110) {
      jQuery(".menu-section").addClass("menu-section-sticky");
    } else {
      jQuery(".menu-section").removeClass("menu-section-sticky");
    }
  });

  // ProgressBar
  $(document).ready(function () {
    const offsetTop = $('#skills').offset().top;
    let animated = false;
    $(window).on('scroll', function () {
      const windowHeight = $(window).height();
      const scrollTop = $(window).scrollTop();
      if (!animated && scrollTop + windowHeight > offsetTop) {
        animated = true;
        $('.skillbar').each(function () {
          const $this = $(this);
          const skillbarWidth = $this.data('percent');
          $this.find('.skillbar-bar').animate(
            {
              width: skillbarWidth,
            },
            2000
          );
        });
      }
    });
  });

  
  // Counter
  var counted = 0;
    $(window).scroll(function() {
    var oTop = $('.counter').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        $({
            countNum: $this.text()
        }).animate({
            countNum: countTo
            },

            {
            duration: 2200,
            easing: 'swing',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
            }
            });
        });
        counted = 1;
        }
    });

    // tabs
    $('.tabs a').click(function() {
      $('.panel').hide();
      $('.tabs a.active').removeClass('active');
      $(this).addClass('active');
      var panel = $(this).attr('href');
      $(panel).fadeIn(1000);
      return false;
    });
    $('.tabs li:first a').click();

    // Owl Carousel
    $("#owl-csel1").owlCarousel({ 
      items: 6,
      margin: 12,
      autoplay: true,
      loop: true,
      autoplayTimeout: 1600,
      responsive: {
        375: {
          items: 2,
        },
        576: {
          items: 3,
        },
        768: {
          items: 4,
        },
        1200: {
          items: 5,
        },
        1400: {
          items: 6,
        }
      }
    });

    // Owl Carousel
    $("#owl-csel2").owlCarousel({
      items: 3,
      margin: 20,
      autoplay: true,
      loop: true,
      autoplayTimeout: 2800,
      dots: true,
      responsive: {
        375: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        }
      }
    });


    // Accordion
    $(document).on('click', '.faq-accordion-top', function () {
      const $this = $(this);
      const $icon = $this.find('i');
      const $text = $this.next('.faq-accordion-text');
      $('.faq-accordion-text').not($text).slideUp(300);
      $('.faq-accordion-top i').not($icon).removeClass('rotated');
      $('.faq-accordion-top').not($this).attr('aria-expanded', false);
      $text.slideToggle(300, function () {
        const isExpanded = $text.is(':visible');
        $this.attr('aria-expanded', isExpanded);
      });
      $icon.toggleClass('rotated');
    });


    // Contact Form
    $("form[name='register-form']").validate({
      rules: {
        name: "required",
        subject: "required",
        email: {
          required: true,
          email: true
        },
        textarea: "required"
      },
      messages: {
        name: "Please enter your name",
        subject: "Please enter your subject",
        email: "Please enter a valid email address",
        textarea: "Please enter a message"
      },
      submitHandler: function (form) {
        alert("Form submitted successfully!");
        form.submit();
      }
    });

    // mobile footer accordion js code
    $('.acc:nth-child(1) .acc-head').addClass('active');
    $('.acc:nth-child(1) .acc-content').slideDown();
    $('.acc:nth-child(1) .acc-head i').removeClass('fa-plus').addClass('fa-minus');
    $('.acc-head').on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).siblings('.acc-content').slideUp();
            $(this).removeClass('active');
            $(this).find('i').removeClass('fa-minus').addClass('fa-plus');
        } else {
            $('.acc-content').slideUp();
            $('.acc-head').removeClass('active');
            $('.acc-head i').removeClass('fa-minus').addClass('fa-plus');
            $(this).siblings('.acc-content').slideDown();
            $(this).addClass('active');
            $(this).find('i').removeClass('fa-plus').addClass('fa-minus');
        }
    });
		
});
