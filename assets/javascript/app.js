var number = 40;
var intervalId;

    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
      number--;
      $("#show-number").html("<h2>Seconds left: " + number + "</h2>");
      if (number === 0) {
        stop();
        alert("Time Up!");
        check();
      }
    }

    function stop() {
       clearInterval(intervalId);
    }

    
    $("#start").click(run);


function check(){
  var q1=document.quiz.question1.value;
  var q2=document.quiz.question2.value;
  var q3=document.quiz.question3.value;
  var q4=document.quiz.question4.value;
  var q5=document.quiz.question5.value;
  var q6=document.quiz.question6.value;
  var q7=document.quiz.question7.value;
  var q8=document.quiz.question8.value;
  var q9=document.quiz.question9.value;
  var q10=document.quiz.question10.value;

  var incorrect=0;
  var correct=0;
  var unanswered=0;
  var answers=["A", "B", "D", "B", "D", "C", "B", "A", "A", "C"];
              //1   //2  //3  //4   //5 //6   //7 //8  //9  //10
  for (var i=1; i<=answers.length;i++){
    console.log(eval("q"+i));
    if (eval("q"+i)==answers[i-1]){
      correct++;
    }
    else if (eval("q"+i)==null || eval("q"+i)==""){
      unanswered++;
    }
  }
  
  console.log(unanswered);
  document.getElementById("after_submit").style.visibility="visible";
  document.getElementById("number_correct").innerHTML="You got "+correct+" correct, "+unanswered+" unanswered "+(answers.length-(correct+unanswered))+" incorrect";
}