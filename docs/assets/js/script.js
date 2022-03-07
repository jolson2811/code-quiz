$(document).ready(function () {
    var user = {
        timerCount: 60,
        score: 0,
        initials: ""
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
            text: "What does .push do?",
            buttons: ['<a id="0" href="#" class="btn btn-primary mb-4">adds to front of array</a>', '<a id="1" href="#" class="btn btn-primary mb-4">takes off first element of array</a>', '<a id="2" href="#" class="btn btn-primary mb-4">takes off last element of array</a>', '<a id="3" href="#" class="btn btn-primary mb-4">adds to array end</a>'],
            answer: 3
        },
        {
            title: "Question 2",
            text: "When invoking a function, what do you call data that is passed through?",
            buttons: ['<a id="0" href="#" class="btn btn-primary mb-4">argument</a>', '<a id="1" href="#" class="btn btn-primary mb-4">parameter</a>'],
            answer: 0
        },
        {
            title: "Question 3",
            text: "What does ! operator mean?",
            buttons: ['<a id="0" href="#" class="btn btn-primary mb-4">and</a>', '<a id="1" href="#" class="btn btn-primary mb-4">or</a>', '<a id="2" href="#" class="btn btn-primary mb-4">not</a>'],
            answer: 2
        }
    ];

    var quizTotalLength = questions.length;

    setCard(quizCurrentPosition);

    function finished() {
        $("#question-title").text("Quiz complete!");
        $("#question-text").text("Please input your initals to save your score");
        var html = '<input id="submit-initial"></input><p>Your score: ' + user.score + '</p><a id="submit" href="#" class="btn btn-primary mb-4">Submit</a>';
        $("#answer-section").html(html);
    }

    function viewHistory() {
        var locStore = JSON.parse(localStorage.getItem("quizHistory"));
        var html = '<h5 id="question-title" class="card-title">Quiz History</h5><ol>';
        if (locStore) {
            $(".card-body").remove("#question-text");
            $(".card-body").remove("#answer-section");
            for (var i = 0; i < locStore.length; i++) {
                html += '<li>Initials: '+locStore[i].initials+', Score: '+locStore[i].score+', Time: '+locStore[i].timerCount+'</li>';
            }
            html += "</ol>";
            $(".card-body").html(html);
            console.log(html);
        }
    }

    $("#high-scores").on("click",function(){
        viewHistory();
    });

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

    var timerInterval = null;

    $("#answer-section").on("click", ".btn", function () {
        if (this.id == "submit") {
            user.initials = $("#submit-initial").val();
            var locStore = JSON.parse(localStorage.getItem("quizHistory"));
            if (locStore) {
                locStore.push(user);
            } else {
                locStore = [];
                locStore.push(user);
            }
            localStorage.setItem("quizHistory", JSON.stringify(locStore));
            locStore = localStorage.getItem("quizHistory");
            viewHistory();
        } else {
            if (quizCurrentPosition == 0) {
                timerInterval = setInterval(function () {
                    if (user.timerCount > 0) {
                        user.timerCount--;
                        $("#time-left").text(user.timerCount);
                    } else {
                        user.timerCount = 0;
                        $("#time-left").text(user.timerCount);
                        finished();
                        clearInterval(timerInterval);
                    }
                }, 1000);
            }

            if (quizCurrentPosition > 0) {//not card one do the following
                if (questions[quizCurrentPosition].answer == this.id) {//answer is correct
                    user.score++;
                    alert("Correct answer");
                } else {
                    alert("Incorrect answer, 10 seconds subtracted");
                    user.timerCount -= 10;
                }
            }

            quizCurrentPosition++;

            if (quizCurrentPosition < quizTotalLength) {
                setCard(quizCurrentPosition);
            }
            if (quizCurrentPosition == quizTotalLength) {
                finished();
                clearInterval(timerInterval);
            }
        }
    });

});