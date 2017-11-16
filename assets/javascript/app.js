//Timer - Variables that will create a 40 second timer
var number = 40;
var intervalId;

//Timer Start - Function that will start the timer
    function run() {
      intervalId = setInterval(decrement, 1000); //Timer will decrease by seconds
    }
//Countdown - Timer will update on html file
    function decrement() {
      number--;
      $("#show-number").html("<h2>Seconds left: " + number + "</h2>"); //will display how much time is left
      if (number === 0) { //if timer is up...
        stop(); //stops timer from going into negatives
        alert("Time Up!"); //alerts user that time is up
        check(); //calls the check function
      }
    }

    function stop() {
       clearInterval(intervalId); //clears variable
    }

    
    $("#start").click(run); //once "start" button is clicked run function (timer) is started

//Answer check - Will check all the answers
function check(){
  //Variables will hold users answers
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

  var incorrect=0; //Will hold how many are incorrect
  var correct=0; //Will hold how many are correct
  var unanswered=0; //Will hold how many are unanswered
  var answers=["A", "B", "D", "B", "D", "C", "B", "A", "A", "C"]; //Array holds the correct answers correlating correct order of questions
              //1   //2  //3  //4   //5 //6   //7 //8  //9  //10

  //For Loop that will check each answer
  for (var i=1; i<=answers.length;i++){
    console.log(eval("q"+i));
    if (eval("q"+i)==answers[i-1]){ //if answer for question[i] is = answer[i-1] (because loop has already added 1)...
      correct++; //correct answered is tallied
    }
    else if (eval("q"+i)==null || eval("q"+i)==""){ //Otherwise if it is unanswered...
      unanswered++; //Question is unanswered
    }
  }
  
  console.log(unanswered);
  //Results - Will only be visible once the user submits or time runs out. "Null" answers are subtracted from the total amount of questions, as are the correct answers, and the remaining number is the number of incorrect answers
  document.getElementById("after_submit").style.visibility="visible";
  document.getElementById("number_correct").innerHTML="You got "+correct+" correct, "+unanswered+" unanswered "+(answers.length-(correct+unanswered))+" incorrect";
}