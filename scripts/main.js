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

   //form

    let loader = $('#loader');



    $('#getConsultation, #getConsultation2').click((e)=> {

        let name = $('#name');
        let name2 = $('#name2');
        let phone = $('#phone');
        let phone2 = $('#phone2');
        let form1 = $('#form1');
        let form2 = $('#form2');
        let thanks = $('.thanks');
        let check = $('input[type=checkbox]');
        let errorCheck = $('.error-check');
        let hasError = false;

        phone2.inputmask({"mask": "(999) 999-9999"});
        phone.inputmask({"mask": "(999) 999-9999"});

        e.preventDefault();

        $('.error').hide();
        errorCheck.hide();
        $('input').css('border-color', 'white');


       if(!name.val()) {
           name.next().show();
           name.css('border-color', '#ad0707');
           hasError = true;
       }
       /*if(!name2.val()) {
           name2.next().show();
           name2.css('border-color', '#ad0707');
           hasError = true;
       }*/

       if(!phone.val()) {
           phone.next().show();
           phone.css('border-color', '#ad0707');
           hasError = true;
       }

       /*if(!phone2.val()) {
           phone2.next().show();
           phone2.css('border-color', '#ad0707');
           hasError = true;
       }*/

        if(!check.is(':checked')) {
           errorCheck.show();
           $('.agreement').hide();
            hasError = true;
        }

        if(!hasError) {
            loader.css('display', 'flex')
            form1.hide();
            $('#consultation-title').hide();

           /* form2.hide();*/

            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: {name: name.val(), phone: phone.val(), check: check.checked}
            })
                .done(function (msg) {
                    loader.hide()
                    if (msg.success) {
                        thanks.css('display', 'flex');

                    } else {
                        $('#consultation-title').show();
                        form1.trigger("reset");
                        form1.show();
                        Swal.fire({
                            icon: 'error',
                            title: 'Возникла ошибка при оформлении заказа',
                            text: 'Попробуйте снова ввести данные или перезвоните нам',
                            confirmButtonColor: '#ecc66b',

                        })
                    }
                });
        }
    })







});