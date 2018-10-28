
$(document).ready(function(){

 var resultWin = 0; 
 var resultLoose = 0;

 var redRandom = Math.floor(Math.random() * 11) + 1;
 var purpleRandom = Math.floor(Math.random() * 11) + 1;
 var blueRandom = Math.floor(Math.random() * 11) + 1;
 var goldRandom = Math.floor(Math.random() * 11) + 1;


  var computerNumber = Math.floor(Math.random() * 101) + 19; 

  $("#computer-number").html(computerNumber);

  var num = 0;
  $("#total").text("Your total score is: " + num);
  $("#red").attr("crystalValue", redRandom);
  $("#purple").attr("crystalValue", purpleRandom);
  $("#blue").attr("crystalValue", blueRandom);
  $("#gold").attr("crystalValue", goldRandom);

  function startGame (){

    computerNumber = Math.floor(Math.random() * 101) + 19;
    $("#computer-number").html(computerNumber); 
    num = 0;
    $("#total").text("Your total score is: " + num);   
  }
  startGame();

  $(".crystal").on('click', function(){

    console.log("clicking");
    var userClick = parseInt($(this).attr("crystalValue"));
    num += userClick;

    console.log("current score" + num);
    $("#total").text("Your total score is: " + num);

    var resultNumber = 0;

    if(num === computerNumber){

      resultWin++;

      $("#win").text("Wins: " + resultWin);
      startGame();
      num = 0;
  
    } else if(num > computerNumber){

      resultLoose++;

      $("#loses").text("Looses: " + resultLoose);
      startGame();
      num = 0;
    
    }
  });

});

