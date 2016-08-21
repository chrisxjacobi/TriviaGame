/*
-make skeleton html/css with classes
-gather questions/answers (data)
-build architecture of questions/answers (radio buttons)
-establish variables of 
	~questions, questionsTotal, correctAnswer, incorrectAnswer, correct/incorrect counters
-questions vs correctAnswer = win; correctAnswer < questions = loss
-setTimer for page


*/


var questions = [{
        question: "Who is the frontman for Emperor?",
        answer: ["Ihsahn", "Necrobutcher", "Gaahl", "Matt Pike"],
        correctAnswer: 0,
    },

    {
        question: "Who released the classic album 'Filosofem'?",
        answer: ["Mayhem", "Dark Fortress", "Burzum", "Venom"],
        correctAnswer: 2,
    },

    {
    	question: "Celtic Frost rose from the ashes of what band?"
    },
]

$(document).ready(function() {

    $(".startButton").on("click", function() {
        $(".startWindow").addClass("invisible");
        $(".questionArea").removeClass("invisible");
        //start countdown timer
        displayQuestion();
    });






    function displayQuestion() {
    	for (i = 0; i < questions.length; i++) {
    		console.log(questions[i].question);
    	}
    }
});
