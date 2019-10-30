var score = 0;
var total = 19;
var points = 1;
var highest = points * total;

function init(){

  sessionStorage.setItem('a1','a');
  sessionStorage.setItem('a2','d');
  sessionStorage.setItem('a3','c');
  sessionStorage.setItem('a4','b');
  sessionStorage.setItem('a5','d');
  sessionStorage.setItem('a6','d');
  sessionStorage.setItem('a7','d');
  sessionStorage.setItem('a8','b');
  sessionStorage.setItem('a9','d');
  sessionStorage.setItem('a10','b');
  sessionStorage.setItem('a11','b');
  sessionStorage.setItem('a12','a');
  sessionStorage.setItem('a13','c');
  sessionStorage.setItem('a14','c');
  sessionStorage.setItem('a15','d');
  sessionStorage.setItem('a16','a');
  sessionStorage.setItem('a17','c');
  sessionStorage.setItem('a18','b');
  sessionStorage.setItem('a19','b');
}

$(document).ready(function(){

  $('.QF').hide();
  $('.fasit').hide();

  $('#Q1').show();

  $('.QF #submit').click(function(){
    current = $(this).parents('form:first').data('question');
    next = $(this).parents('form:first').data('question')+1;
    $('#F'+current+'' ).fadeIn(300);
    return false;
  });

  $('.fasit #next').click(function(){
    current = $(this).parents('form:first').data('question');
    next = $(this).parents('form:first').data('question')+1;
    $('.QF').hide();
    $('.fasit').hide();
    process(''+current+'')
    $('#Q'+next+'' ).fadeIn(300);
    return false;
  });

});

function process(n){
  var submitted = $('input[name=Q'+n+']:checked').val();
  if(submitted == sessionStorage.getItem('a'+n+'')){
    score = score + points;
  }

  if(n == total){
    $('#results').html('<h3 class="QQ" > Your got: '+score+' out of  '+highest+' points. <br/> <br/> <br/> <ul><li><a href="Quiz1.html"> Take the quiz again!</a></li> <li><a href="index.html">Homepage!</a></li></ul>');
  }
  return false;
}


window.addEventListener('load', init, false);
