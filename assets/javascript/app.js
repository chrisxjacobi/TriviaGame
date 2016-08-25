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

var questionsTotal = 10;
var questionsCorrect = 0;
var questionsWrong = 0;


var questionOne = {
    question: "Who is the frontman for Emperor?",
    answer: ["Ihsahn", "Necrobutcher", "Gaahl", "Nocturno Culto"],
    correctAnswer: 0,
};

var questionTwo = {
    question: "What band released the classic album 'Filosofem'?",
    answer: ["Mayhem", "Dark Fortress", "Burzum", "Venom"],
    correctAnswer: 2,
};

var questionThree = {
    question: "Celtic Frost rose from the ashes of what band?",
    answer: ["Mortuary Drape", "Hellhammer", "Goblin", "Darkthrone"],
    correctAnswer: 1,
};

var questionFour = {
    question: "What band released the 2013 genre-defying 'Sunbather'?",
    answer: ["Woe", "Marduk", "Deafheaven", "Enslaved"],
    correctAnswer: 2,
};

var questionFive = {
    question: "Complete the band name: _____ In The Throne Room",
    answer: ["Drapes", "Goats", "Wolves", "Dreams"],
    correctAnswer: 2,
};

var questionSix = {
    question: "Which of the following is NOT an album by Watain?",
    answer: ["Lawless Darkness", "Evangelion", "The Wild Hunt", "Sworn to the Dark"],
    correctAnswer: 1,
};

var questionSeven = {
    question: "Which French band has managed to keep their personal identities private for over almost 20 years?",
    answer: ["Cilice", "Gojira", "Celeste", "Deathspell Omega"],
    correctAnswer: 3,
};

var questionEight = {
    question: "Which band coined the term 'Black Metal' with the title of their 1982 classic album?",
    answer: ["Venom", "Ascension", "Dispirit", "Weakling"],
    correctAnswer: 0,
};

var questionNine = {
    question: "Legendary act Bathory was named after noblewoman Countess Elisabeth Bathory of which Eastern European country?",
    answer: ["Moldova", "Poland", "Slovakia", "Hungary"],
    correctAnswer: 3,
};

var questionTen = {
    question: "Immortal has based their lyrical content on the events of what fictitious world?",
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
        //start countdown timer
        for (var i = 0; i < questions.length; i++) {
            // <div class="question">
            //   <div class="question-text"></div>
            //   <div class="options"></div>
            var questionEl = $('<div class="question">');
            var questionText = $('<div class="question-text">');
            questionText.html(questions[i].question);
            questionEl.append(questionText);
            var answerGroup = $('<form class="answers">');
            questionEl.append(answerGroup);

            for (var j = 0; j < questions[i].answer.length; j++) {
                var answerEl = $('<div class="answer"><input type="radio'  + '" name="radio">' + questions[i].answer[j] + '</div>');
                answerGroup.append(answerEl);
            }

            $('.questionArea').append(questionEl);
        }
        $('questionArea').append('<button</> class="submit"')

    })

    $('submitButton').on('click', function() {

    });





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
