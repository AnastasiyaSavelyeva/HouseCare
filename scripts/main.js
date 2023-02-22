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
        $('.hidden').css('display', 'grid');
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


    //comments

    const dialog = $('#dialog'),
        width = $(window).width(),
        roundOne = $('#round1'),
        roundTwo = $('#round2'),
        roundThree = $('#round3'),
        roundFour = $('#round4'),
        roundFive = $('#round5'),
        textOne = $('#text1'),
        textTwo = $('#text2'),
        textThree = $('#text3'),
        textFour = $('#text4'),
        textFive = $('#text5'),
        scheme = $('#scheme'),
        rounds = $('.round');




    if (width <= 1024) {
        rounds.click(()=> {
            scheme.css('padding-bottom', '30px')
        })

        roundOne.click(()=> {
            dialog.toggle().html(textOne);
        })
        roundTwo.click(()=> {
            dialog.toggle().html(textTwo);
        })
        roundThree.click(()=> {
            dialog.toggle().html(textThree);
        })
        roundFour.click(()=> {
            dialog.toggle().html(textFour);
        })
        roundFive.click(()=> {
            dialog.toggle().html(textFive);
        })

    }








   //form

    let loader = $('#loader');

    $('.btn-form').click((e)=> {

        let name = $('#name'),
         name2 = $('#name2'),
         phone = $('#phone'),
         phone2 = $('#phone2'),
         form1 = $('#form1'),
         form2 = $('#form2'),
         thanks = $('.thanks'),
         check = $('input[type=checkbox]'),
         errorCheck = $('.error-check'),
         hasError = false;
         phone.inputmask({"mask": "(999) 999-9999"});
         phone2.inputmask({"mask": "(999) 999-9999"});

        e.preventDefault();

        $('.error').hide();
        errorCheck.hide();
        $('input').css('border-color', 'white');

      if(!name.val()) {
           name.next().show();
           name.css('border-color', '#ad0707');
           hasError = true;
       }
/*       if(!name2.val()) {
           name2.next().show();
           name2.css('border-color', '#ad0707');
           hasError = true;
       }*/

       if(!phone.val()) {
           phone.next().show();
           phone.css('border-color', '#ad0707');
           hasError = true;
       }

   /*    if(!phone2.val()) {
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

           form2.hide();

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