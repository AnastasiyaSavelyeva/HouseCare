
'use strict'
//wow
new WOW({
    animateClass: 'animate__animated'
}).init();


$(document).ready(function(){

    //slider

    $('.slider').slick({
        slidesToScroll: 1,
        prevArrow: '.arrow-prev',
        nextArrow: '.arrow-next',
        dots: true,
        infinite: true,
        variableWidth: true,
        arrows: true,
        dotsClass: 'slick-dots',
        centerMode: true,
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
            dialog.show().html(textOne);
        })
        roundTwo.click(()=> {
            dialog.show().html(textTwo);
        })
        roundThree.click(()=> {
            dialog.show().html(textThree);
        })
        roundFour.click(()=> {
            dialog.show().html(textFour);
        })
        roundFive.click(()=> {
            dialog.show().html(textFive);
        })
    }


    //form

    let loader = $('#loader');

    let phone1 = $('#phone1'),
        phone2 = $('#phone2'),
        name1 = $('#name1'),
        name2 = $('#name2'),
        form1 = $('#form1'),
        form2 = $('#form2'),
        thanks1 = $('#thanks1'),
        agree1 = $('#agreement1'),
        check = $('input[type=checkbox]'),
        thanks2 = $('#thanks2'),
        agree2 = $('#agreement2'),
        title = $('#title1'),
        errorCheck = $('.error-check');


    phone1.inputmask({"mask": "+7 (999) 999-99-99"});
    phone2.inputmask({"mask": "+7 (999) 999-99-99"});

    $('#submit1').click((e)=> {

        let hasError = false;

        e.preventDefault();

        $('.error').hide();
        agree1.hide();
        errorCheck.hide();
        $('input').css('border-color', 'white');

        if(!name1.val()) {
            name1.next().show();
            name1.css('border-color', '#ad0707');
            hasError = true;
        }

        if(!phone1.val()) {
            phone1.next().show();
            phone1.css('border-color', '#ad0707');
            hasError = true;
        }

        if(!check.is(':checked')) {
            errorCheck.show();
            hasError = true;
        }

        if(!hasError) {
            loader.css('display', 'flex')
            form1.hide();
            title.hide();

            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: {name: name1.val(), phone: phone1.val(), check: check.checked}
            })
                .done(function (msg) {
                    loader.hide()
                    if (msg.success) {
                        thanks1.css('display', 'flex');

                    } else {
                        $('#consultation-title').show();
                        form1.trigger("reset");
                        form1.show();
                        title.show();
                        agree1.show();
                        Swal.fire({
                            icon: 'error',
                            title: 'Возникла ошибка при оформлении заказа',
                            text: 'Попробуйте снова ввести данные или перезвоните нам',
                            confirmButtonColor: '#ecc66b',
                        })
                    }
                });
        }
    });

    $('#submit2').click((e)=> {
        let hasError = false;

        e.preventDefault();
``
        $('.error').hide();
        agree2.hide();
        errorCheck.hide();
        $('input').css('border-color', 'white');

        if(!name2.val()) {
            name2.next().show();
            name2.css('border-color', '#ad0707');
            hasError = true;
        }

        if(!phone2.val()) {
            phone2.next().show();
            phone2.css('border-color', '#ad0707');
            hasError = true;
        }

        if(!check.is(':checked')) {
            errorCheck.show();
            hasError = true;
        }

        if(!hasError) {
            loader.css('display', 'flex')
            form2.hide();

            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: {name: name2.val(), phone: phone2.val(), check: check.checked}
            })
                .done(function (msg) {
                    loader.hide()
                    if (msg.success) {
                        thanks2.css('display', 'flex');

                    } else {
                        $('#consultation-title').show();
                        form2.trigger("reset");
                        form2.show();
                        agree2.show();
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
