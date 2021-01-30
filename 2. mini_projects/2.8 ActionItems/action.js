function showDetail1() {
    let status = $('.main-card-btn1').val();
    let display = $('#detail-card' + status).css('display');

    if (display == 'block') {
        $('#detail-card' + status).hide();
        $('.main-card-btn1').text('자세히 보기')

    } else {
        for (var i = 1; i < 10; i++) {
            $('#detail-card' + i).hide();
            $('.main-card-btn' + i).text('자세히 보기');
        }
        $('#detail-card' + status).show();
        $('.main-card-btn1').text('닫기')
    }
}

function showDetail2() {
    let status = $('.main-card-btn2').val();
    let display = $('#detail-card' + status).css('display');

    if (display == 'block') {
        $('#detail-card' + status).hide();
        $('.main-card-btn2').text('자세히 보기')

    } else {
        for (var i = 1; i < 10; i++) {
            $('#detail-card' + i).hide();
            $('.main-card-btn' + i).text('자세히 보기');
        }
        $('#detail-card' + status).show();
        $('.main-card-btn2').text('닫기')
    }
}

function showDetail3() {
    let status = $('.main-card-btn3').val();
    let display = $('#detail-card' + status).css('display');

    if (display == 'block') {
        $('#detail-card' + status).hide();
        $('.main-card-btn3').text('자세히 보기')

    } else {
        for (var i = 1; i < 10; i++) {
            $('#detail-card' + i).hide();
            $('.main-card-btn' + i).text('자세히 보기');
        }
        $('#detail-card' + status).show();
        $('.main-card-btn3').text('닫기')
    }
}

function showDetail4() {
    let status = $('.main-card-btn4').val();
    let display = $('#detail-card' + status).css('display');

    if (display == 'block') {
        $('#detail-card' + status).hide();
        $('.main-card-btn4').text('자세히 보기')

    } else {
        for (var i = 1; i < 10; i++) {
            $('#detail-card' + i).hide();
            $('.main-card-btn' + i).text('자세히 보기');
        }
        $('#detail-card' + status).show();
        $('.main-card-btn4').text('닫기')
    }
}

function showDetail5() {
    let status = $('.main-card-btn5').val();
    let display = $('#detail-card' + status).css('display');

    if (display == 'block') {
        $('#detail-card' + status).hide();
        $('.main-card-btn5').text('자세히 보기')

    } else {
        for (var i = 1; i < 10; i++) {
            $('#detail-card' + i).hide();
            $('.main-card-btn' + i).text('자세히 보기');
        }
        $('#detail-card' + status).show();
        $('.main-card-btn5').text('닫기')
    }
}

function showDetail6() {
    let status = $('.main-card-btn1').val();
    let display = $('#detail-card' + status).css('display');

    if (display == 'block') {
        $('#detail-card' + status).hide();
        $('.main-card-btn6').text('자세히 보기')

    } else {
        for (var i = 1; i < 10; i++) {
            $('#detail-card' + i).hide();
            $('.main-card-btn' + i).text('자세히 보기');
        }
        $('#detail-card' + status).show();
        $('.main-card-btn6').text('닫기')
    }
}