$(function() {
    if(jQuery('.scroll-to').length) {
        var $page = $('html, body');
        $('.scroll-to[href*="#"]').click(function() {
            $page.animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 400);
            return false;
        });
    }

    //select-number form
    if(jQuery('.phone-mask').length) {
        jQuery(function($){
            $(".phone-mask").mask("+38(999) 999-9999");
        });
    }

    //tabs
    $('.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('.tabs').find('.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });
    if(jQuery('.gallery__body').length) {
        $('.gallery__body').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            centerMode: true,
            variableWidth: true,
            arrows: false,
            dots: true,
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                  }
                }
              ]
          });
    }
    //start note slider
    if(jQuery('.rev_slider').length) {
        var rev = $('.rev_slider');
        rev.on('init', function(event, slick, currentSlide) {
        var
            cur = $(slick.$slides[slick.currentSlide]),
            next = cur.next(),
            prev = cur.prev();
        prev.addClass('slick-sprev');
        next.addClass('slick-snext');
        cur.removeClass('slick-snext').removeClass('slick-sprev');
        slick.$prev = prev;
        slick.$next = next;
        }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        // console.log('beforeChange');
        var
            cur = $(slick.$slides[nextSlide]);
        // console.log(slick.$prev, slick.$next);
        slick.$prev.removeClass('slick-sprev');
        slick.$next.removeClass('slick-snext');
        next = cur.next(),
            prev = cur.prev();
        prev.prev();
        prev.next();
        prev.addClass('slick-sprev');
        next.addClass('slick-snext');
        slick.$prev = prev;
        slick.$next = next;
        cur.removeClass('slick-next').removeClass('slick-sprev');
        });
        
        rev.slick({
        speed: 1000,
        arrows: true,
        dots: false,
        focusOnSelect: true,
        // prevArrow: '<button> prev</button>',
        // nextArrow: '<button> next</button>',
        infinite: true,
        centerMode: true,
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0',
        swipe: true,
        customPaging: function(slider, i) {
            return '';
        },
        });
    }
//end note slider        

  //popup
  if(jQuery('.modal__wrap').length) {
    let modalWrap = $('.modal__wrap');
    //popup
    $(".modal-open").click(function (e){
      e.preventDefault();
      var btn = $(this);
      var numModal = btn.attr('href');
      if(numModal == '#modalQuiz'){

        $('.qa-del-discount').css('display', 'block');
      }
      var modal =  $(numModal);
      modalWrap.removeClass('fadeOutUp');
      modalWrap.addClass('fadeInDown');
    //   modalWrap.removeClass('animated zoomOut');
    //   modalWrap.addClass('animated zoomIn');
      modal.removeClass('disabled');
      modal.addClass('flex');
      $('body').addClass('body-modal-open');
      // body.addClass('body-modal');

    });
    $('.modal-close').click(function (){
        if ( window.innerWidth < 750 || window.screen.width < 750) {
            $('.main-menu').removeClass('active');
            $('.menu-toggle').removeClass('active');
        }
        modalWrap.removeClass('fadeInDown');
        modalWrap.addClass('fadeOutUp');
        // modalWrap.removeClass('animated zoomIn');
        // modalWrap.addClass('animated zoomOut');
        setTimeout(function() {
            $('.modal').addClass('disabled');
            }, 700);
        setTimeout(function() {
            $('.modal').removeClass('flex');
            $('body').removeClass('body-modal-open');
            }, 800);  
    });
    $('.modal').mouseup(function (e){ // событие клика по веб-документу
      var div = $(".modal__body"); // тут указываем ID элемента
      var close = $('.modal-close');
      if (close.is(e.target)) {
      } else if (!div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0) { // и не по его дочерним элементам
            $('.main-menu').removeClass('active');
            $('.menu-toggle').removeClass('active');
            var modalWrap = $('.modal__wrap');
            modalWrap.removeClass('fadeInDown');
            modalWrap.addClass('fadeOutUp');
            // modalWrap.removeClass('animated zoomIn');
            // modalWrap.addClass('animated zoomOut');
            setTimeout(function() {
                $('.modal').addClass('disabled');
            }, 700);
            setTimeout(function() {
                $('.modal').removeClass('flex');
                $('body').removeClass('body-modal-open');
            }, 800);
      }
    });
}
    // UTM
    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
        }
        return(false);
    }

    $('form').find('input.utm_source').each(function() {
        var a = getQueryVariable('utm_source');
        if(a){
            $(this).val(a);
        }
    }); 
    $('form').find('input.utm_medium').each(function() {
        var a = getQueryVariable('utm_medium');
        if(a){
            $(this).val(a);
        }
    });
    $('form').find('input.utm_campaign').each(function() {
        var a = getQueryVariable('utm_campaign');
        if(a){
            $(this).val(a);
        }
    });
    $('form').find('input.utm_term').each(function() {
        var a = getQueryVariable('utm_term');
        if(a){
            $(this).val(a);
        }
    });
    $('form').find('input.utm_content').each(function() {
        var a = getQueryVariable('utm_content');
        if(a){
            $(this).val(a);
        }
    });
  
    //scrollto
    
    if(jQuery('.scroll-to').length) {
        var $page = $('html, body');
        $('.scroll-to[href*="#"]').click(function() {
            $page.animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 400);
            return false;
        });
    }
    //mob slider
    if ( window.innerWidth < 821 || window.screen.width < 821) {
        $('.stations__arrow').on('click', function(){
            $(this).parent().parent().parent().parent().toggleClass('active');
            // .siblings().children().removeClass('active');
            $(this).next().toggleClass('active');
        });
    }


        //click on form submit button - AMO
            // form
    $('form').submit(function() { 
        var form = $(this);
        var btn = $(this).find('.quiz__btn');
        form.find('.rfield').addClass('empty_field');

        // Функция проверки полей формы

        form.find('.rfield').each(function(){
            if($(this).val() != ''){
                // Если поле не пустое удаляем класс-указание
                $(this).removeClass('empty_field');

                console.log(form);
                    

                    if (!form.find('.empty_field').length) {
                        $.ajax({
                            type: "POST",
                            url: "../send.php", //Change
                            data: form.serialize()
                        }).done(function() {
                            var numModal = form.find('.btn-finish').attr('data-modal');
                            var modal =  $(numModal);
                            var modalWrap = $('.modal__wrap');
                            modalWrap.removeClass('fadeOutUp');
                            modalWrap.addClass('fadeInDown');
                            // modalWrap.removeClass('animated zoomOut');
                            // modalWrap.addClass('animated zoomIn');
                            $('.modal').addClass('disabled');
                            modal.removeClass('disabled');
                            modal.addClass('flex');
                            $('body').addClass('body-modal-open');
                            setTimeout(function() {
                                // Done Functions
                                // form.trigger("reset");
                            }, 1000);

                            fbq('track', 'Lead');
                            btn.attr('href', "#").removeClass('quiz__btn').css('pointer-events', 'none');
                            btn.parent().css('opacity', '0.5').css('pointer-events', 'none');
 
                        });


                        // $.ajax({
                        //     method: "POST",
                        //     url: "../telegram.php", //Change
                        //     data: form.serialize()
                        // }).done(function(){});
                    }


            } else {}
        });
		return false;
    });


});