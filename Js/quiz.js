var score = 0;
var total = 30;
var points = 1;
var highest = points * total;

function init(){
  sessionStorage.setItem('a1','a');
  sessionStorage.setItem('a2','d');
  sessionStorage.setItem('a3','b');
  sessionStorage.setItem('a4','d');
  sessionStorage.setItem('a5','b');
  sessionStorage.setItem('a6','d');
  sessionStorage.setItem('a7','b');
  sessionStorage.setItem('a8','c');
  sessionStorage.setItem('a9','b');
  sessionStorage.setItem('a10','a');
  sessionStorage.setItem('a11','d');
  sessionStorage.setItem('a12','b');
  sessionStorage.setItem('a13','c');
  sessionStorage.setItem('a14','c');
  sessionStorage.setItem('a15','d');
  sessionStorage.setItem('a16','a');
  sessionStorage.setItem('a17','c');
  sessionStorage.setItem('a18','b');
  sessionStorage.setItem('a19','d');
  sessionStorage.setItem('a20','c');
  sessionStorage.setItem('a21','a');
  sessionStorage.setItem('a22','b');
  sessionStorage.setItem('a23','d');
  sessionStorage.setItem('a24','b');
  sessionStorage.setItem('a25','c');
  sessionStorage.setItem('a26','d');
  sessionStorage.setItem('a27','c');
  sessionStorage.setItem('a28','a');
  sessionStorage.setItem('a29','d');
  sessionStorage.setItem('a30','b');
}

$(document).ready(function(){
  $('.QF').hide();
  $('.fasit').hide();
  $('#Q1').show();

  $('.QF #submit').click(function(){
    current = $(this).parents('form:first').data('question');
    next = $(this).parents('form:first').data('question')+1;
    process(''+current+'')
    $('#Check'+current+'' ).fadeIn(300);
    $('#F'+current+'' ).fadeIn(300);
    return false;
  });

  $('.fasit #next').click(function(){
    current = $(this).parents('form:first').data('question');
    next = $(this).parents('form:first').data('question')+1;
    $('.QF').hide();
    $('.fasit').hide();
    if(current == total){
      finalScore=score;
      $('#results').html('<h3 class="QQ" > You got: '+score+' out of  '+highest+' points. ');
      if(finalScore == highest){
         $('#results').append('<h3 class= "QQ"> Wow! You are a project management master, just like Bassam! :))  <h3>');
       } else if(finalScore == highest - points || score == highest - points - points){
         $('#results').append('<h3 class= "QQ"> Almost full score. Good job! :)  <h3>');
       } else if(finalScore >= 20){
         $('#results').append('<h3 class= "QQ"> Good job! <h3>');
       } else if(finalScore >= 15){
         $('#results').append('<h3 class= "QQ"> About 50%, decent! :) <h3>');
      } else if(finalScore >= 12){
          $('#results').append('<h3 class= "QQ"> Not too bad, but not that good either. Keep trying :) <h3>');
      } else{
         $('#results').append('<h3 class= "QQ"> Yikes, you should probably study a bit more. Maybe take the quiz again? ;) <h3>');
       }
       $('#results').append('<br/> <br/><br/> <br/> <br/> <ul><li><a href="Quiz1.html"> Take the quiz again!</a></li> <li><a href="index.html">Homepage!</a></li></ul>')
    }

    $('#Q'+next+'' ).fadeIn(300);
    return false;
  });
});

function process(n){
  var submitted = $('input[name=Q'+n+']:checked').val();
  scorePrev = score;
  if(submitted == sessionStorage.getItem('a'+n+'')){
    score = score + points;
  }
  if(scorePrev==score){
    $('#Check'+n+'').html('<h2> Wrong answer</h2>')
  } else{
    $('#Check'+n+'').html('<h2> You are correct!</h2>')
  }
  return false;
}

window.addEventListener('load', init, false);
