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
	// Custom JS
    $('.stations__slider').on('initialized.owl.carousel changed.owl.carousel', function (e) {
        if (!e.namespace) {
            return;
        }
        let carousel = e.relatedTarget;
        $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
        $('.stations__item').removeClass('active');
    }).owlCarousel({
        loop: false,
        dots: false,
        margin: 10,
        nav: true,
        navText: ['<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><g transform="matrix(1 0 0 -1 0 1008)"><path d="M756.2,741.8L990,508L756.2,274.2l-27,27L918.1,490H10v36h908.1L729.3,714.8L756.2,741.8z"/></g></g></svg>', '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><g transform="matrix(1 0 0 -1 0 1008)"><path d="M756.2,741.8L990,508L756.2,274.2l-27,27L918.1,490H10v36h908.1L729.3,714.8L756.2,741.8z"/></g></g></svg>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});



document.addEventListener('DOMContentLoaded', function(){
//menu
    var menu = document.querySelector('.menu-toggle');
    menu.addEventListener('click', function(){
        var nav = document.querySelector('.main-menu');
        nav.classList.toggle('active');
        var navGamb = document.querySelector('.menu-toggle');
        navGamb.classList.toggle('active');
    });
//tabs
	// store tabs variable
	var myTabs = document.querySelectorAll("ul.header__tabs > li");
    function myTabClicks(tabClickEvent) {
		for (var i = 0; i < myTabs.length; i++) {
			myTabs[i].classList.remove("active");
		}
		var clickedTab = tabClickEvent.currentTarget;
		clickedTab.classList.add("active");
		tabClickEvent.preventDefault();
		var myContentPanes = document.querySelectorAll(".tab-pane");
		for (i = 0; i < myContentPanes.length; i++) {
			myContentPanes[i].classList.remove("active");
		}
        var anchorReference = tabClickEvent.target;
        console.log(anchorReference);
        var activePaneId = anchorReference.getAttribute("href");
        console.log(activePaneId);
        var activePane = document.querySelector(activePaneId);
        console.log(activePaneId);
		activePane.classList.add("active");
    }
    for (i = 0; i < myTabs.length; i++) {
		myTabs[i].addEventListener("click", myTabClicks)
	}





});

$(function() {
    //select-number form
    if(jQuery('.phone-mask').length) {
        jQuery(function($){
            $(".phone-mask").mask("+38(999) 999-9999");
        });
    }
    //time
    if (window.innerHeight < 821 || window.screen.height < 821) {
        $('.time__num').on('click', function(){
            $(this).parent().siblings().children().removeClass('active');
            $(this).next().toggleClass('active');
        });
        $(document).mouseup(function (e){ // событие клика по веб-документу
            var div = $(".time__num"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
                $('.time__num').parent().siblings().children().removeClass('active');
            }
        });
    }
    $('.stations__slider').on('initialized.owl.carousel changed.owl.carousel', function (e) {
        if (!e.namespace) {
            return;
        }
        let carousel = e.relatedTarget;
        $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
        $('.stations__item').removeClass('active');
    }).owlCarousel({
        loop: false,
        dots: false,
        margin: 10,
        nav: true,
        navText: ['<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><g transform="matrix(1 0 0 -1 0 1008)"><path d="M756.2,741.8L990,508L756.2,274.2l-27,27L918.1,490H10v36h908.1L729.3,714.8L756.2,741.8z"/></g></g></svg>', '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><g transform="matrix(1 0 0 -1 0 1008)"><path d="M756.2,741.8L990,508L756.2,274.2l-27,27L918.1,490H10v36h908.1L729.3,714.8L756.2,741.8z"/></g></g></svg>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('.reviews__slider').on('initialized.owl.carousel changed.owl.carousel', function (e) {
        if (!e.namespace) {
            return;
        }
        let carousel = e.relatedTarget;
        $('.slider-counter--reviews').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
    }).owlCarousel({
        loop: false,
        dots: false,
        margin: 10,
        nav: true,
        navText: ['<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><g transform="matrix(1 0 0 -1 0 1008)"><path d="M756.2,741.8L990,508L756.2,274.2l-27,27L918.1,490H10v36h908.1L729.3,714.8L756.2,741.8z"/></g></g></svg>', '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><g transform="matrix(1 0 0 -1 0 1008)"><path d="M756.2,741.8L990,508L756.2,274.2l-27,27L918.1,490H10v36h908.1L729.3,714.8L756.2,741.8z"/></g></g></svg>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


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
    //   modalWrap.removeClass('fadeOutUp');
    //   modalWrap.addClass('fadeInDown');
      modalWrap.removeClass('animated zoomOut');
      modalWrap.addClass('animated zoomIn');
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
        // modalWrap.removeClass('fadeInDown');
        // modalWrap.addClass('fadeOutUp');
        modalWrap.removeClass('animated zoomIn');
        modalWrap.addClass('animated zoomOut');
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
            // modalWrap.removeClass('fadeInDown');
            // modalWrap.addClass('fadeOutUp');
            modalWrap.removeClass('animated zoomIn');
            modalWrap.addClass('animated zoomOut');
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

    //kviz
    if(jQuery('.kviz').length) {
        $('.qa-next').click(function(e){
            e.preventDefault();
            if($(this).parent().prev().find('input:checked').length) {
                $(this).parent().parent('.step-slide').removeClass('step-slide--active').next().addClass('step-slide--active');
            } else {
                $(this).parent().find('.kviz__error').text('Выберите вариант ответа!');
            }

            
        });
        // for radiobuttons
        $('input[type="radio"]+.pick-item__label').click(function(e){
            $(this).parent().parent().parent('.step-slide').removeClass('step-slide--active').next().addClass('step-slide--active');           
        });

        $(".qa-prev").click(function(e) {
            e.preventDefault();
            $(this).parent().parent('.step-slide').removeClass('step-slide--active').prev().addClass('step-slide--active');
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

                if((form.attr("name") == "quiz") && form.find('.useful__input:checked').length) {
                        
                console.log('jr');
                    

                    if (!form.find('.empty_field').length) {
                        if(form.attr("name") == "podderjka"){
                            ym(62113519,'reachGoal','callback');
                        }
                        if(form.attr("name") == "quiz"){
                            ym(62113519,'reachGoal','order'); 
                        }
                        $.ajax({
                            type: "POST",
                            url: "../sendamo.php", //Change
                            data: form.serialize()
                        }).done(function() {
                            var numModal = form.find('.btn-finish').attr('data-modal');
                            var modal =  $(numModal);
                            var modalWrap = $('.modal__wrap');
                            // modalWrap.removeClass('fadeOutUp');
                            // modalWrap.addClass('fadeInDown');
                            modalWrap.removeClass('animated zoomOut');
                            modalWrap.addClass('animated zoomIn');
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

            } else {
                $('.useful__label').css('border-color', 'red');
            }
            } else {}
        });
		return false;
    });


});