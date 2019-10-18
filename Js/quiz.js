var score = 0;
var total = 3;
var points = 1;
var highest = points * total;

function init(){

  sessionStorage.setItem('a1','a');
  sessionStorage.setItem('a2','a');
  sessionStorage.setItem('a3','a');
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
    $('#results').html('<h3> Your results : '+score+' out of  '+highest+' points. </h3><a href="spm.html"> Take the quiz again!</a> <br/> <a href="index.html">Homepage!</a><br/> <a href="side2.html">Take another quiz!</a>');
  }
  return false;
}


window.addEventListener('load', init, false);
