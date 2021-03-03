$(document).ready(function () {


  // SLIDER TECHNOLOGY
  $('.techno-slider').on('init', function (event, slick) {
    $(this).append('<div class="slider-co"><span id="carrent">01</span>/<span id="total">' + slick.slideCount + '</span></div>');


  });
  $('.techno-slider_wrap').slick({
    infinite: true,
    arrows: true,
    prevArrow: '<button type="button" class="techno_btn slick-prev"></button>',
    nextArrow: '<button type="button" class="techno_btn slick-next"></button>',
    responsive: [
      {
        breakpoint: 767.98,
        settings: {
          arrows: true,
          slidesToShow: 1
        }
      },
    ]
  });

  $('.techno-slider_wrap')
    .on('afterChange', function (event, slick, currentSlide, nextSlide) {
      $('.slider-co #carrent').html(currentSlide + 1);
      if (currentSlide < 9) {
        $(".slider-co #carrent").prepend("0");
      }
    });

  // OBJECT_SLIDER

  $('.object-slider').on('init', function (event, slick) {
    $(this).append('<div class="slider-cou"><span id="carrent">01</span>/<span id="total">' + slick.slideCount + '</span></div>');
  });
  $('.object-slider_wrap').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    prevArrow: '<button type="button" class="object_btn slick-prev"></button>',
    nextArrow: '<button type="button" class="object_btn slick-next"></button>',
    responsive: [
      {
        breakpoint: 767.98,
        settings: {
          arrows: true,
          slidesToShow: 1
        }
      },

    ]
  });
  $('.object-slider_wrap')
    .on('afterChange', function (event, slick, currentSlide, nextSlide) {
      $('.slider-cou #carrent').html(currentSlide + 1);
      if (currentSlide < 9) {
        $(".slider-cou #carrent").prepend("0");
      }
    });


  // PRODUCT SLIDER + GALLERY SLIDER

  $('.carousel-slider_wrap').
    on('init beforeChange', function (e, slick, curr, next) {
      const
        count = slick.slideCount,
        show = slick.options.slidesToShow,
        center = slick.options.centerMode,
        index = (next | 0) - center * (count > show ? show / 2 | 0 : 0),
        selector = shift => `[data-slick-index="${index + shift * count}"]`;
      $('.slick-scale', this).removeClass('slick-scale');
      $([0, 1, -1].map(selector).join(', '), this).addClass('slick-scale');
    }).slick({
      slidesToShow: 5,
      infinite: true,
      centerMode: true,
      variableWidth: true,
      dots: true,
      prevArrow: '<button type="button" class="slide_btn slick-prev"></button>',
      nextArrow: '<button type="button" class="slide_btn slick-next"></button>',

      responsive: [
        {
          breakpoint: 767.98,
          settings: {
            arrows: true,
            dots: true,
          }
        },
  
      ]
    });


  // PRODUCT SLIDER + GALLERY SLIDER
  $('.carousel_slide').each(function () {
    console.log($(this).index());
    $(this).append('<span class="carousel_zoom"></span>');
  });

  $('.carousel_zoom').on('click', function (event) {
    let img = $(this).prev().attr('src');
    console.log(img)
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="' + img + '"></div>');
    $('#overlay, #magnify').fadeIn('fast');
  });
  $('body').on('click', '#overlay', function (event) {
    event.preventDefault();
    $('#overlay, #magnify').fadeOut('fast', function () {
      $('#magnify, #overlay').remove();
    });
  });


  // OBJECT SLIDER
  $('.object_slide').each(function () {
    console.log($(this).index());
    $(this).append('<span class="over-zoom"></span>');
  });

  $('.over-zoom').on('click', function (event) {
    let img = $(this).prev().attr('src');
    console.log(img)
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="' + img + '"></div>');
    $('#overlay, #magnify').fadeIn('fast');
  });
  $('body').on('click', '#overlay', function (event) {
    event.preventDefault();
    $('#overlay, #magnify').fadeOut('fast', function () {
      $('#magnify, #overlay').remove();
    });
  });

  // DROPDOWN MENU 
  let btn_menu = $('.menu-item_dropdown');
  let dropdown = $('.dropdown');
  btn_menu.on('click', function () {
    event.preventDefault();
    dropdown.toggleClass('show-menu');
    $('.icon-chevron-down').toggleClass('rotate180');
  });
  $(document).mouseup(function (e) {
    if (!$(".menu-item_dropdown").is(e.target) &&
      $(".menu-item_dropdown").has(e.target).length === 0) {
      $('.dropdown').removeClass('show-menu');
      $('.icon-chevron-down').removeClass('rotate180');
    }
  });
  //MENU
  let burg = $('.btn-menu');
  let close = $('.btn-close');
  let menu = $('.header-burg_menu')

  burg.on('click', function () {
    menu.css({ left: '0' })

  })
  close.on('click', function () {
    menu.css({ left: '-285px' })
  })
  // MENU


});


