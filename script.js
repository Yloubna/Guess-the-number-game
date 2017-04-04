$("#play").click(function(){

  $("body").html('<input type="text" id="choice" placeholder="Enter your number... " required /> <input type="submit" id="submit" ONCLICK="GuessNum();"/> <h1 id="smile"> Enjoy &#9786</h1> <footer><p> &copy  made with &#9829 by LoubnaY</p></footer>');
  
}) 

function newgame(){
  $('h1').slideUp("slow");
  $('#hell').slideUp("slow");
  $('#tryagain').css({
    "display":"none"
  });
  $("body").html('<input type="text" id="choice" placeholder="Enter your number... " required /> <input type="submit" id="submit" ONCLICK="GuessNum();"/> <h1 id="smile"> Enjoy &#9786</h1> <footer><p> &copy  made with &#9829 by LoubnaY</p></footer>');
  
}

function GuessNum(){

let guess= $("#choice").val();
let x = Math.floor(Math.random() * 100);
let call = '<h1 id="wrg">Wrong! Try again...</h1>';
let clickMe =  '<input type="submit" id="tryagain" value="Click me" ONCLICK="newgame();"/>'; 
  
{ 
   if (guess == x) {
    $('body').html('<p><center><h1>You Win !!</h1><br></center></p> '+clickMe+'<footer><p> &copy  made with &#9829 by LoubnaY</p></footer>');
    
  } 
  else {
    if($.isNumeric(guess) ) {
    
    $('body').html(call);
    if (guess < x) {$('body').html(call+ '<p id="hell">Your number was too small!</p>'+clickMe+'<footer><p> &copy  made with &#9829 by LoubnaY</p></footer>');}
    if (guess > x) {$('body').html(call+ ' <p id="hell">Your number was too big!</p>'+clickMe+'<footer><p> &copy  made with &#9829 by LoubnaY</p></footer>');}
     } else {
       $('body').html('<h1 id="isNot">Please try to enter a number</h1>'+clickMe+'<footer><p> &copy  made with &#9829 by LoubnaY</p></footer>')
     }
  }
}
 
}
