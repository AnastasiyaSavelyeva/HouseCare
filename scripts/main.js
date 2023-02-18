'use strict'

$(document).ready(function(){
    //slider
    $('.slider').slick({
        prevArrow: '.arrow-prev',
        nextArrow: '.arrow-next',
        dots: true,
        infinite: true,
        variableWidth: true,
        arrows: true,
        dotsClass: 'slick-dots',
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
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

    //menu
    const menu = $('#menu');

    $('#burger').click(function () {
        menu.show();
    })

    $('#close').click(() => {
        menu.hide()
    })

    //more
    const more = $('#more');
    more.click(()=> {
        $('.hidden').css('display', 'flex');
        more.hide()
    })

    //popup
    const popup = $('#popup');

    $('#registration').click(()=> {
        popup.show();
    });
    $('#cancel').click(()=> {
        popup.hide();
    })


    //popup-open-image
    $('.popup-open-image').magnificPopup({
        type: 'image'
    });

   //form1

    const name = $('#name');
    const phone = $('#phone');
    let check = $('input[type=checkbox]');
    let errorCheck = $('.error-check');

    phone.inputmask({"mask": "(999) 999-9999"});

    $('#getConsultation').click((e)=> {

        e.preventDefault();

        $('.error').hide();
        errorCheck.hide();
        $('input').css('border-color', 'white');

       if(!name.val()) {
           name.next().show();
           name.css('border-color', '#ad0707');
       }
       if(!phone.val()) {
           phone.next().show();
           phone.css('border-color', '#ad0707');
       }

        if(!check.is(':checked')) {
           errorCheck.show();
           $('#agreement').hide();
        }
    })
   //form2

    const name2 = $('#name2');
    const phone2 = $('#phone2');
    let check2 = $('.popup input[type=checkbox]');
    console.log(check2)
    let errorCheck2 = $('.popup .error-check');

    phone2.inputmask({"mask": "(999) 999-9999"});


       $('#getConsultation2').click((event)=> {

        event.preventDefault();

        $('.error').hide();
        errorCheck2.hide();
        $('input').css('border-color', 'white');

       if(!name2.val()) {
           name2.next().show();
           name2.css('border-color', '#ad0707');
       }
       if(!phone2.val()) {
           phone2.next().show();
           phone2.css('border-color', '#ad0707');
       }

        if(!check2.is(':checked')) {
           errorCheck2.show();
            $('#agreement2').hide();
        }
    })





});