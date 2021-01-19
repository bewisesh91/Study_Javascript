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
        if ($('#R').val()>=3 && $('#O').val()>=3 && $('#E').val()>=3) {
            PAI_type = 'H_I'
        } else if ($('#R').val()<=2 && $('#O').val()<=2 && $('#E').val()<=2) {
            PAI_type = 'L_I'
        } else if ($('#R').val()>=2 && $('#O').val()>=2 && $('#E').val()>=2) {
            PAI_type = 'M'
        } else if ($('#R').val()>=2 && $('#O').val()>=2 && $('#E').val()>=2) {
            PAI_type = 'L_A'
        } else if ($('#R').val()>=3 && $('#O').val()>=3 && $('#E').val()>=3) {
            PAI_type = 'H_A'
        }    

        $('.question').hide();
        $('.result').show();

        $('#type_img').attr('src','img/' + result[PAI_type]['img'])
        $('#type_title').html(result[PAI_type]['title'])
        $('#type_explain').html(result[PAI_type]['explain'])

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
    1: {"contents": "나는 규칙을 잘 따르는 사람으로 <br> 남들에게 장기간, 일관적으로 보이는 것이 어렵지않다.", "type": "R", "Yes": "Yes", "No": "No"},
    2: {"contents": "나는 문제를 남들과 다른 시각으로 바라보는 사람으로 <br> 남들에게 장기간, 일관적으로 보이는 것이 어렵지않다.", "type": "O", "Yes": "Yes", "No": "No"},
    3: {"contents": "나는 구체적으로 계획된 일을 좋아하는 사람으로 <br> 남들에게 장기간, 일관적으로 보이는 것이 어렵지않다.", "type": "E", "Yes": "Yes", "No": "No"},
    4: {"contents": "나는 규정을 어기거나 회피 하려는 시도를 절대 하지 않을 사람으로 <br> 남들에게 장기간, 일관적으로 보이는 것이 어렵지않다.", "type": "R", "Yes": "Yes", "No": "No"},
    5: {"contents": "나는 독창적인 아이디어가 있는 사람으로 <br> 남들에게 장기간, 일관적으로 보이는 것이 어렵지않다.", "type": "O", "Yes": "Yes", "No": "No"},
    6: {"contents": "나는 일 하는 방식이 체계적이고 조직적인 사람으로 <br> 남들에게 장기간, 일관적으로 보이는 것이 어렵지않다.", "type": "E", "Yes": "Yes", "No": "No"},
    7: {"contents": "나는 정해진 방식에서 벗어나지 않고 일 하는 사람으로 <br> 남들에게 장기간, 일관적으로 보이는 것이 어렵지않다.", "type": "R", "Yes": "Yes", "No": "No"},
    8: {"contents": "나는 기존 것을 개선하는 활동보다는 새로 만들기를 좋아하는 사람으로 <br> 남들에게 장기간, 일관적으로 보이는 것이 어렵지않다.", "type": "O", "Yes": "Yes", "No": "No"},
    9: {"contents": "나는 늘 한결같은 사람으로 <br> 남들에게 장기간, 일관적으로 보이는 것이 어렵지않다.", "type": "E", "Yes": "Yes", "No": "No"},
    10: {"contents": "나는 기존 체계에 쉽게 들어 맞는 사람으로 <br> 남들에게 장기간, 일관적으로 보이는 것이 어렵지않다.", "type": "R", "Yes": "Yes", "No": "No"},
    11: {"contents": "나는 사람들에게 새로운 자극을 주는 사람으로 <br> 남들에게 장기간, 일관적으로 보이는 것이 어렵지않다.", "type": "O", "Yes": "Yes", "No": "No"},
    12: {"contents": "나는 관리하는 것들에 엄격한 질서를 부여하기 좋아하는 사람으로 <br> 남들에게 장기간, 일관적으로 보이는 것이 어렵지않다.", "type": "E", "Yes": "Yes", "No": "No"},
    13: {"contents": "나는 일반적으로 좋다고 하는 것을 잘 받아들이는 사람으로 <br> 남들에게 장기간, 일관적으로 보이는 것이 어렵지않다.", "type": "R", "Yes": "Yes", "No": "No"},
    14: {"contents": "나는 아이디어가 넘치는 사람으로 <br> 남들에게 장기간, 일관적으로 보이는 것이 어렵지않다.", "type": "O", "Yes": "Yes", "No": "No"},
    15: {"contents": "나는 꼼꼼한 사람으로 <br> 남들에게 장기간, 일관적으로 보이는 것이 어렵지않다.", "type": "E", "Yes": "Yes", "No": "No"},
}

// 결과 리스트
var result = {
    "H_I": {"title": "Innovative Style + ", "explain": "나는야 아이디어 뱅크! <br> 음... 과연 이게 최선일까? <br> 대담하게 새로운 길을 가자!!!", "img": "result2.png"},
    "L_I": {"title": "Innovative Style - ", "explain": "새로운 것 없을까?  <br> 합리적으로 생각해보자 <br> 내 속도로 변화를 만들거야!", "img": "result.png"},
    "M": {"title": "Middle", "explain": "첫 만남에 맘에 드는 상대를 발견하고 결혼까지 생각하는 당신은 일을 진행하면서 계속해서 미래를 상상하고 자극받는 걸 좋아해요. 모든 일에는 이유와 의미가 있다고 생각하는 당신! 그만큼 다 중요하다고 생각하기 때문에 허투루 일을 하는 사람이 아니에요. 그래서 더 목표를 중요하게 여겨요. 계획에는 어떠한 목표가 있는지 확인하고 맞는 계획을 세워 이뤄나가려해요. 완벽한 계획을 추구해요. 그만큼 추진력도 강해 주변에서 믿음직한 사람이라고 많이 들어요.", "img": "result3.png"},
    "L_A": {"title": "Adaptive Style - ", "explain": "연애 상담을 하다보면 결혼과 출산까지 염두해서 조언을 해주는 당신은 나무보다 숲, 아니 달에서 우주 저만리까지 보는 사람이에요. 큰틀을 우선적으로 생각하다보니 꿈꾸는 목표치가 점점 높아지고, 불어나는 계획들을 자각하지 못하다 다시 돌아가기도 해요. 하지만, 이 모든 건 내 목표를 이루어나가기 위한 것! 들어가는 시간이 곧 '투자'라고 생각하기 때문에 해결책을 찾아 실행해요. 미래를 낙관적으로 판단하는 성향이 있기 때문에 보다 더 강하게 목표를 향해 달려나가려 노력해요.", "img": "result4.png"},
    "H_A": {"title": "Adaptive Style + ", "explain": "안드로이드급의 무표정으로 느긋하게 있는 것처럼 보이지만 언제든지 다른 방향으로 움직일 수 있도록 머리에서 이미 계산을 다 굴리고 있어요. 이미 세워진 계획이 있더라도 목표를 더 잘 달성하기 위해서라면 다 뒤집더라도 다시 할 수 있는 용기를 가지고 있어요. 꽂힌 일은 사막에서 바늘찾는 일을 하는 것처럼 꼼꼼하게하지만 그렇지 않으면 손에서 놓아버리는 과감함도 가지고 있어요. 하지만 때로는 생각만 과감하고 행동은 뜨뜻미지근한 경우가 있어 이상과 현실의 괴리감에 빠지기도 해요.", "img": "result5.png"},
} 

