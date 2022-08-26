/* Coloque o JS neste arquivo */

$(document).ready(function () {
  $('.fullbanner__wrapper ul').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  });

  if (screen.width < 800) {
    $('.categorias .container').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    });

    $('.destaques .product_wrapper').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true
    });

  }


  $(".seta").click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 550) {
      $('.topo').addClass('fixed-header');
      $('.menu').addClass('fixed-header');
    } else {
      $('.topo').removeClass('fixed-header');
      $('.menu').removeClass('fixed-header');
    }
  });

  $("ul li.title").click(function () {
    $(this).parent().toggleClass("active");
  });

  $(".menu-mobile .menu-lateral li.menu__categoria.hasChildren span").click(function () {
    $(this).parent().toggleClass("open");
  });

  $(".menu-mobile .menu-lateral li.menu__categoria .subcategoria li.hasChildren").click(function () {
    $(this).toggleClass("open-sub");
  });

  $(".menu-mobile img").click(function () {
    $(".menu-lateral").show();
  });

  $(".close-menu").click(function () {
    $(this).parent().hide();
  });

});


