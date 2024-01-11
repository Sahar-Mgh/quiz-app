const questions = [
    {
        question : "which one is the largest animal int the world?",
        answers : [
            {text: "Shark", correct: false},
            {text: "Whale", correct: true},
            {text: "Giraffe", correct: false},
            {text: "elephant", correct: false}
        ]
    },
    {
        question : "which one is the largest desert int the world?",
        answers : [
            {text: "Gobi", correct: false},
            {text: "Sahara", correct: true},
            {text: "Kalahari", correct: false},
            {text: "Antractica", correct: false}
        ]
    },
    {
        question : "which one is the smallest continent int the world?",
        answers : [
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Arctic", correct: false},
            {text: "Africa", correct: false}
        ]
    },
    {
        question : "which one is the smallest country int the world?",
        answers : [
            {text: "Shri Lanka", correct: false},
            {text: "Nepal", correct: false},
            {text: "Vatican City", correct: true},
            {text: "Bhutan", correct: false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

