/*
-make skeleton html/css with classes
-gather questions/answers (data)
-build architecture of questions/answers (radio buttons)
-establish variables of 
    ~questions, questionsTotal, correctAnswer, incorrectAnswer, correct/incorrect counters
-questions vs correctAnswer = win; correctAnswer < questions = loss
-setTimer for page
-create questionArray with all Questions
-create answerArray with all Answers
-create correctAnswerArray with the correct answers */
var game = {
    correct: 0,
    incorrect: 0,
    counter: 90,

    clock: function() {
        game.counter--;
        $('#counter').html(game.counter);

        if (game.counter === 0) {
            alert("Game over!");
            // game.done();
        }
    },
    start: function() {
        game.start;
    },
}



var questionOne = {
    question: "I: Who is the frontman for Emperor?",
    answer: ["Ihsahn", "Necrobutcher", "Gaahl", "Nocturno Culto"],
    correctAnswer: 0,
};

var questionTwo = {
    question: "II: Which artist released the classic album 'Filosofem'?",
    answer: ["Mayhem", "Dark Fortress", "Burzum", "Venom"],
    correctAnswer: 2,
};

var questionThree = {
    question: "III: Celtic Frost rose from the ashes of what band?",
    answer: ["Mortuary Drape", "Hellhammer", "Goblin", "Darkthrone"],
    correctAnswer: 1,
};

var questionFour = {
    question: "IV: Which act released the 2013 genre-defying 'Sunbather'?",
    answer: ["Woe", "Marduk", "Deafheaven", "Enslaved"],
    correctAnswer: 2,
};

var questionFive = {
    question: "V: Complete the band name: _____ In The Throne Room",
    answer: ["Drapes", "Goats", "Wolves", "Dreams"],
    correctAnswer: 2,
};

var questionSix = {
    question: "VI: Which of the following is NOT an album by Watain?",
    answer: ["Lawless Darkness", "Evangelion", "The Wild Hunt", "Sworn to the Dark"],
    correctAnswer: 1,
};

var questionSeven = {
    question: "VII: Which French collective has managed to keep their personal identities private for almost 20 years?",
    answer: ["Cilice", "Gojira", "Celeste", "Deathspell Omega"],
    correctAnswer: 3,
};

var questionEight = {
    question: "VIII: Which band coined the term 'Black Metal' with the title of their 1982 classic album?",
    answer: ["Venom", "Ascension", "Dispirit", "Weakling"],
    correctAnswer: 0,
};

var questionNine = {
    question: "IX: Legendary act Bathory was named after noblewoman Countess Elisabeth Bathory of which Eastern European country?",
    answer: ["Moldova", "Poland", "Slovakia", "Hungary"],
    correctAnswer: 3,
};

var questionTen = {
    question: "X: Immortal has based their lyrical content on the events of what fictitious world?",
    answer: ["Isa", "Blashyrkh", "Von", "Divinus"],
    correctAnswer: 1,
}

var questions = [
    questionOne,
    questionTwo,
    questionThree,
    questionFour,
    questionFive,
    questionSix,
    questionSeven,
    questionEight,
    questionNine,
    questionTen,
];

$(document).ready(function() {

    $('.startButton').on('click', function() {
        $('.startWindow').addClass('invisible');
        $('.questionArea').removeClass('invisible');
        // $('.finalgif').addClass('invisible');

        var submitButton = $('<button>');
        submitButton.addClass('submit');
        submitButton.text('Submit');
        $('.wrapper').append(submitButton);

        $('.submit').on('click', function() {
            $('.questionArea').remove();
            submitButton.remove();
            $('.music').remove();
            $('#counter').remove();
            clearInterval(timer);


            function checkAnswer() {
              $('.input').each(function() {
                if ($(this).attr('data-correct') === true ) {
                console.log("yes");
                } else {
                  console.log('no');
                }                 
              });
            };

            var scoreArea = $('<div>');
            scoreArea.addClass('scoring');
            scoreArea.text("You guessed " + game.correct + " correct and " + game.incorrect + " wrong!");
            $('.wrapper').append(scoreArea)
            $('.finalgif').show();
            checkAnswer();

            var refreshButton = $('<button>');
            refreshButton.addClass('refresh');
            refreshButton.text('Play Again!');
            $('.wrapper').append(refreshButton);

            $('.refresh').click(function() {
                location.reload();
            })

        });

        //game.start();
        timer = setInterval(game.clock, 1000)
        $('.questionArea').prepend("Time remaining: <span id='counter'>90</span> Seconds");
        for (var i = 0; i < questions.length; i++) {
            var showQuestion = $('<div class="question">');
            var questionText = $('<div class="question-text">');
            questionText.html(questions[i].question);
            showQuestion.append(questionText);


            var answerGroup = $('<form class="answers">');
            showQuestion.append(answerGroup);


            for (var j = 0; j < questions[i].answer.length; j++) {
                var showAnswer = $('<div class="answer"></div>');
                var input = $('<input type="radio" name="radio" class="input">');
                input.attr('data-correct', questions[i].correctAnswer === j);
                showAnswer.append(input);
                showAnswer.append(questions[i].answer[j]);
                answerGroup.append(showAnswer);
            }



            $('.questionArea').append(showQuestion);

        }

    });
    /*  result: function() {
          clearInterval(timer);
          $('.questionArea').remove();
          $('.questionArea').html("Finished!")
          $('.questionArea').append("Correct Answers: " + this.correct);
          $('.questionArea').append("Incorrect Answers: " + this.incorrect);
      }; */
    // <div class="question">
    //   <div class="question-text"></div>
    //   <div class="options"></div>
    /*  done: function() {
          $.each($'input[name="questionOne":checked');
          if ($(this).val()===questionOne.correctAnswer) {
              game.correct++;
          } else {
              game.incorrect++;
          };
      }; */

    //  $('.questionArea').html(questionOne.question);
    // $('.questionArea').append('<div>hello world</div>');

    //HOW DO I ADD ALL QUESTIONS TO THE PAGE??
    //HOW DO I: build content of form in jQuery (input type = "radio"...)??
    //HOW DO I: add submit button??

    /* function displayQuestion() {
         for (i = 0; i < questions.length; i++) {
             
         }
     } */
});
