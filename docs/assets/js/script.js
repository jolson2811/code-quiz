var user = {
    timerCount: 120000,//2 mintues in milliseconds, total time
    score: 0
}
var questions = [//Array of questions that will be answered
    {
        title: "Coding Quiz Challenge",
        text: "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!",
        buttons: ["Start Quiz"],
        answer: 0 
    },
    {
        title: "Question 1",
        text: "What does the array prototype push do?",
        buttons: ["adds to front of array","takes off first element of array","takes off last element of array","adds to array end"],
        answer: 3
    },
    {
        title: "Question 2",
        text: "What does \! mean?",
        buttons: ["tea","help","yes"],
        answer: 2
    },
    {
        title: "Question 3",
        text: "adfasdfasdfadsf",
        buttons: ["adsfas","asdfasd"],
        answer: 0
    },
    {
        title: "Question 4",
        text: "afdsasdfa",
        buttons: ["asdfasd","adsfas"],
        answer: 1
    },
    {
        title: "Question 5",
        text: "asdfasdfa",
        buttons: ["asdfa","asdfa"],
        answer: 1
    }
];

$(document).ready(function(){

});