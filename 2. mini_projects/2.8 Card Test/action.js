function showDetail1() {
    let status = $('.card1').val();
    let display = $('.detail-card'+status).css('display');
    if (display == 'block') {
        $('.detail-card' + status).hide();
        $('.card1').text('자세히 보기')

    } else {
        for (var i = 1; i < 10; i++) {
            $('.detail-card' + i).hide();
            $('.card' + i).text('자세히 보기');
        }
        $('.detail-card' + status).show();
        $('.card1').text('닫기')
    }
}
function showDetail2() {
    let status = $('.card2').val();
    let display = $('.detail-card'+status).css('display');
    if (display == 'block') {
        $('.detail-card' + status).hide();
        $('.card2').text('자세히 보기')

    } else {
        for (var i = 1; i < 10; i++) {
            $('.detail-card' + i).hide();
            $('.card' + i).text('자세히 보기');
        }
        $('.detail-card' + status).show();
        $('.card2').text('닫기')
    }
}

function showDetail3() {
    let status = $('.card3').val();
    let display = $('.detail-card'+status).css('display');
    if (display == 'block') {
        $('.detail-card' + status).hide();
        $('.card3').text('자세히 보기')

    } else {
        for (var i = 1; i < 10; i++) {
            $('.detail-card' + i).hide();
            $('.card' + i).text('자세히 보기');
        }
        for (var i = 1; i < 4; i++) {
            $('.detail-image3' + i).show();
        }
        $('.detail-card' + status).show();
        $('.card3').text('닫기')
    }
}