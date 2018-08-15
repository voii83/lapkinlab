var fieldName = $('.feedback-name-input');
var fieldPhone = $('.feedback-phone-input');
var fieldEmail = $('.feedback-email-input');

function emptyFields(field) {
    field.focusout(function () {
        if (field.val() === "") {
            field.addClass('error-require-input').attr('placeholder', 'Поле обязательно для заполнения');
        } else {
            field.removeClass('error-require-input');
        }
    });
}

function emailValidField(field) {
    var re = /^.+@.+\..+$/;

    field.focusout(function () {

        if (re.test(field.val())) {
            field.removeClass('error-require-input');
        } else {
            if (field.val() !== '') {
                var errorEmail = field.val() + " - неправильный email";
            }
            field.val('');
            field.addClass('error-require-input').attr('placeholder', errorEmail);


        }
    });
}

function phoneValidField(field) {
    var re = /^\d+$/;

    field.focusout(function () {

        if (re.test(field.val())) {
            field.removeClass('error-require-input');
        } else {
            if (field.val() !== '') {
                var errorPhone = field.val() + " - неправильный телефон (введите только числа)";
            }
            field.val('');
            field.addClass('error-require-input').attr('placeholder', errorPhone);
        }
    });
}

emptyFields(fieldName);
emptyFields(fieldPhone);
emptyFields(fieldEmail);

phoneValidField(fieldPhone);
emailValidField(fieldEmail);


//////////////////// SLIDER
$(function () {
    var elWrap = $('#slider'),
        el =  elWrap.find('img'),
        indexImg = 1,
        indexMax = el.length;

    function change () {
        el.fadeOut(500);
        el.filter(':nth-child('+indexImg+')').fadeIn(500);
    }

    function autoCange () {
        indexImg++;
        if(indexImg > indexMax) {
            indexImg = 1;
        }
        change ();
    }
    var interval = setInterval(autoCange, 4000);

    elWrap.mouseover(function() {
        clearInterval(interval);
    });
    elWrap.mouseout(function() {
        interval = setInterval(autoCange, 4000);
    });

    elWrap.append('<span class="next"></span><span class="prev"></span>');

    $('span.next').click(function() {
        indexImg++;
        if(indexImg > indexMax) {
            indexImg = 1;
        }
        change ();
    });
    $('span.prev').click(function() {
        indexImg--;
        if(indexImg < 1) {
            indexImg = indexMax;
        }
        change ();
    });
});