const STORE = {
    correctAnswers: 0,
    incorrectAnswers: 0,
    currentQuestion: 0
}

const QUESTIONS = [
    {
        question: "Who is Elon?",
        answers: [
            "An entrepeneur",
            "A billionaire",
            "An all-around awesome guy",
            "All of the above"
        ],
        correctAnswer: "All of the above"
    },
    {
        question: "Where was Elon born?",
        answers: [
            "The United States of America",
            "Canada",
            "South Africa",
            "Australia"
        ],
        correctAnswer: "South Africa"
    },
    {
        question: "What is Elon Musk's middle name?",
        answers: [
            "Reeve",
            "Adam",
            "Henry",
            "Maye"
        ],
        correctAnswer: "Reeve"
    },
    {
        question: "What was Elon Musk's first multi-million dollar company?",
        answers: [
            "Paypal",
            "Zip2",
            "Tesla",
            "SpaceX"
        ],
        correctAnswer: "Zip2"
    },
    {
        question: "When asked about Jeff Bezos, Elon Musk famously replied:",
        answers: [
            "\"I hate Amazon.\"",
            "\"We both have space companies!\"",
            "\"Jeff who?\"",
            "\"I think his companies are overvalued.\""
        ],
        correctAnswer: "\"Jeff who?\""
    }
]

// Components For Renders
function generateOptionHtml() {

}


// Rendering Functions
function renderCounter() {
    $('.js-counter').html(`Question: ${STORE.currentQuestion}/${QUESTIONS.length}`);
    $('.score').html(`Score: ${STORE.correctAnswers}`);
}

function renderStartPage() {
    $('.js-render').html(`
    <h2>Start The Quiz</h2>
    <p>Elon Musk has been pretty popular among the public lately, and that's great. But here's the problem: he's also gaining a lot of inauthentic bandwagons. 
    This quiz was designed to weed out Elon Musk's #1 fans from the fake fans jumping in on the hype. 
    So, do you think you can prove your worth? Give it a try!</p>
    <button class = "js-start">Start</button>
    `);
    renderCounter();
}

function renderQuestionPage() {
    // currentQuestion for me
}

// Event listeners
function handleStart() {
    $('.js-render').on('click', '.js-start', function (event) {
        renderQuestionPage();
    });
}

function handleRestart() {
    $('.js-render').on('click', '.js-restart', function (event) {

    });
}

function handleSubmit() {
    $('.js-render').on('click', '.js-submit', function (event) {

    });
}

function handleNext() {
    $('.js-render').on('click', '.js-next', function (event) {

    });
}


function main() {
    renderStartPage(); //render but rest are listeners
    handleStart();
    handleRestart();
    handleSubmit();
    handleNext();
}

$(main);