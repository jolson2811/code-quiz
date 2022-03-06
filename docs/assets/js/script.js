$(document).ready(function () {
    var user = {
        timerCount: 60,
        score: 0
    }
    var quizCurrentPosition = 0;
    var questions = [//Array of questions that will be answered
        {
            title: "Coding Quiz Challenge",
            text: "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!",
            buttons: ['<a id="0" href="#" class="btn btn-primary">Start Quiz</a>'],
            answer: 0
        },
        {
            title: "Question 1",
            text: "What does the array prototype push do?",
            buttons: ['<a id="0" href="#" class="btn btn-primary mb-4">adds to front of array</a>', '<a id="1" href="#" class="btn btn-primary mb-4">takes off first element of array</a>', '<a id="2" href="#" class="btn btn-primary mb-4">takes off last element of array</a>', '<a id="3" href="#" class="btn btn-primary mb-4">adds to array end</a>'],
            answer: 3
        },
        {
            title: "Question 2",
            text: "What does the array prototype push do?",
            buttons: ['<a id="0" href="#" class="btn btn-primary mb-4">adds to front of array</a>', '<a id="1" href="#" class="btn btn-primary mb-4">adds to array end</a>'],
            answer: 1
        },
        {
            title: "Question 3",
            text: "What does the array prototype push do?",
            buttons: ['<a id="0" href="#" class="btn btn-primary mb-4">takes off first element of array</a>', '<a id="1" href="#" class="btn btn-primary mb-4">takes off last element of array</a>', '<a id="2" href="#" class="btn btn-primary mb-4">adds to array end</a>'],
            answer: 2
        }
    ];

    var quizTotalLength = questions.length;

    setCard(quizCurrentPosition);

    function setCard(position) {
        $("#question-title").text(questions[position].title);
        $("#question-text").text(questions[position].text);
        var html = "";
        for (var i = 0; i < questions[position].buttons.length; i++) {
            html += questions[position].buttons[i];
        }
        $("#answer-section").html(html);
        $("#answer-section").attr("style", "d-flex flex-column align-items-center");
    }

    $("#answer-section").on("click", ".btn", function () {
        if(quizCurrentPosition == 0){
            var timerInterval = setInterval(function(){
                if(user.timerCount > 0){
                    user.timerCount--;
                }else{
                    user.timerCount = 0;
                    clearInterval(timerInterval);
                }
            },1000);
        }
        if (quizCurrentPosition > 0) {//not card one do the following
            if (questions[quizCurrentPosition].answer == this.id) {//if the answer is the same as user click
                user.score++;
                alert("Correct answer");
            } else {
                if(user.score > 0){
                    user.score--;
                }
                alert("Incorrect answer");
            }
        }
        console.log("User score is", user.score);
        quizCurrentPosition++;
        if (quizCurrentPosition < quizTotalLength) {
            setCard(quizCurrentPosition);
        }
    });

});