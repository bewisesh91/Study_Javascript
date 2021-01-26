// Test Start 버튼을 클릭했을 때, article class='start'를 숨기고, article class='question'을 나타냄
function start(){
    $('.start').hide();
    $('.question').show();
    next();
};

var q_num = 1;
function next() {
    if (q_num == 16) {
        // PAI type 결과를 결정하는 로직을 작성한다.
        var PAI_type = '';
        var type_other1 = '';
        var type_other2 = '';
        if ($('#R').val()<=2 && $('#O').val()>=3 && $('#E').val()<=2) {
            PAI_type = 'I'
            type_other1 = 'M'
            type_other2 = 'A'
        } else if ($('#R').val()>=3 && $('#O').val()<=2 && $('#E').val()>=3) {
            PAI_type = 'A'
            type_other1 = 'M'
            type_other2 = 'I'
        } else {
            PAI_type = 'M'
            type_other2 = 'I'
            type_other1 = 'A'
        }

        $('.question').hide();
        $('.result').show();

        $('#type_img').attr('src','img/' + result[PAI_type]['img'])
        // $('#type_title').html(result[PAI_type]['title'])
        // $('#type_explain').html(result[PAI_type]['explain'])

        $('#type_other1').attr('src','img/' + result[type_other1]['img'])
        $('#type_other2').attr('src','img/' + result[type_other2]['img'])


    } else {
        $('#contents').html(questions[q_num]['contents']);
        $('#type').val(questions[q_num]['type']);
        $('#Yes').html(questions[q_num]['Yes']);
        $('#No').html(questions[q_num]['No']);
        $('.progress-bar').attr('style','width: calc(100/15*'+(q_num)+'%)');
        $('#counts').html(q_num+' / 15');
        q_num++;
    }
}

// id="Yes"를 클릭 했을 때, 함수를 실행
// 해당 함수는 id="type"의 value를 가져오고, 그 value를 type이라는 변수에 저장
// 변수 type에 해당하는 태그의 value를 가져와서, preValue라는 변수에 저장
// 변수 type에 해당하는 태그의 value를 prevValue에 1을 더한 값으로 변환 
$("#Yes").click(function(){
    var type = $('#type').val();
    var preValue = $('#'+type).val();
    $('#'+type).val(parseInt(preValue)+1);
    next();
});
    
$("#No").click(function(){
    next();
});

// 문제 리스트
var questions = {
    1: {"contents": "나는 규칙을 잘 따르는 사람으로 <br> 남들에게 장기간, 일관적으로 보이는 것이", "type": "R", "Yes": "쉽다", "No": "어렵다"},
    2: {"contents": "나는 문제를 남들과 다른 시각으로 바라보는 사람으로 <br> 남들에게 장기간, 일관적으로 보이는 것이", "type": "O", "Yes": "쉽다", "No": "어렵다"},
    3: {"contents": "나는 구체적으로 계획된 일을 좋아하는 사람으로 <br> 남들에게 장기간, 일관적으로 보이는 것이", "type": "E", "Yes": "쉽다", "No": "어렵다"},
    4: {"contents": "나는 규정을 어기거나 회피 하려는 시도를 절대 하지 않을 사람으로 <br> 남들에게 장기간, 일관적으로 보이는 것이", "type": "R", "Yes": "쉽다", "No": "어렵다"},
    5: {"contents": "나는 독창적인 아이디어가 있는 사람으로 <br> 남들에게 장기간, 일관적으로 보이는 것이", "type": "O", "Yes": "쉽다", "No": "어렵다"},
    6: {"contents": "나는 일 하는 방식이 체계적이고 조직적인 사람으로 <br> 남들에게 장기간, 일관적으로 보이는 것이", "type": "E", "Yes": "쉽다", "No": "어렵다"},
    7: {"contents": "나는 정해진 방식에서 벗어나지 않고 일 하는 사람으로 <br> 남들에게 장기간, 일관적으로 보이는 것이", "type": "R", "Yes": "쉽다", "No": "어렵다"},
    8: {"contents": "나는 기존 것을 개선하는 활동보다는 새로 만들기를 좋아하는 사람으로 <br> 남들에게 장기간, 일관적으로 보이는 것이", "type": "O", "Yes": "쉽다", "No": "어렵다"},
    9: {"contents": "나는 늘 한결같은 사람으로 <br> 남들에게 장기간, 일관적으로 보이는 것이", "type": "E", "Yes": "쉽다", "No": "어렵다"},
    10: {"contents": "나는 기존 체계에 쉽게 들어 맞는 사람으로 <br> 남들에게 장기간, 일관적으로 보이는 것이", "type": "R", "Yes": "쉽다", "No": "어렵다"},
    11: {"contents": "나는 사람들에게 새로운 자극을 주는 사람으로 <br> 남들에게 장기간, 일관적으로 보이는 것이", "type": "O", "Yes": "쉽다", "No": "어렵다"},
    12: {"contents": "나는 관리하는 것들에 엄격한 질서를 부여하기 좋아하는 사람으로 <br> 남들에게 장기간, 일관적으로 보이는 것이", "type": "E", "Yes": "쉽다", "No": "어렵다"},
    13: {"contents": "나는 일반적으로 좋다고 하는 것을 잘 받아들이는 사람으로 <br> 남들에게 장기간, 일관적으로 보이는 것이", "type": "R", "Yes": "쉽다", "No":"어렵다"},
    14: {"contents": "나는 아이디어가 넘치는 사람으로 <br> 남들에게 장기간, 일관적으로 보이는 것이", "type": "O", "Yes": "쉽다", "No": "어렵다"},
    15: {"contents": "나는 꼼꼼한 사람으로 <br> 남들에게 장기간, 일관적으로 보이는 것이", "type": "E", "Yes": "쉽다", "No": "어렵다"},
}

// 결과 리스트
var result = {
    "I": {"title": "해시계를 기깔나게 표현하는 문구", "explain": "나는야 해시계", "img": "result1.jpeg"},
    "M": {"title": "명품시계를 기깔나게 표현하는 문구 ", "explain": "나는야 배꼽시계", "img": "result2.jpeg"},
    "A": {"title": "올림픽시계를 기깔나게 표현하는 문구", "explain": "나는야 올림픽시계", "img": "result3.jpeg"},
} 

function others() {
    let status = $('.type_others').css('display');
    if (status == 'block') {
        $('.type_others').hide();
        $('.btn-type-other').text('다른 유형 구경하기')
    } else {
        $('.type_others').show();
        $('.btn-type-other').text('다른 유형 구경닫기')
    }
}

Kakao.init('9d747fb632219a3cd369499cf00cb58a'); // 초기화
function sendLink() { // 카카오톡 공유하기
    Kakao.Link.sendDefault({
        objectType: 'text',
        text: '나의 시간 활용 유형은?',
        link: {
            mobileWebUrl: 'https://developers.kakao.com/docs/js/kakaotalklink#텍스트-템플릿-보내기',
            webUrl: 'https://developers.kakao.com/docs/js/kakaotalklink#텍스트-템플릿-보내기',
        },
    })
}