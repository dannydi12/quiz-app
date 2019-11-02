const STORE = {
    correctAnswers: 0,
    // incorrectAnswers: 0,
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
function generateOptionHtml(answerIndex) {
    return `<p>
      <input type="radio" name="answer" id="${answerIndex}" value="${QUESTIONS[STORE.currentQuestion].answers[answerIndex]}">
      <label for="${answerIndex}">${QUESTIONS[STORE.currentQuestion].answers[answerIndex]}</label>
    </p>`;
}

function generateAllOptionsHtml() {
    let arrayOfOptions = QUESTIONS[STORE.currentQuestion].answers;
    return arrayOfOptions.map((option, i) => generateOptionHtml(i)).join('');
}

function renderWrong() {
    // Make array of insults and randomly insert them, same with right
    return `<h2>Oof, that's wrong.</h2>
    <p>The correct answer was: ${QUESTIONS[STORE.currentQuestion].correctAnswer}</p>
    <button class = "next-button js-next">Next</button>`
}

function renderRight() {
    STORE.correctAnswers++;
    return `<h2>Elon approves!</h2>
    <img src="happy-image">
    <button class = "next-button js-next">Start</button>`
}

function isCorrect(givenAnswer) {
    let correctAnswer = QUESTIONS[STORE.currentQuestion].correctAnswer;
    return givenAnswer === correctAnswer;
}

// Rendering Functions
function renderCounter() {
    $('.js-counter').html(`Question: ${STORE.currentQuestion + 1}/${QUESTIONS.length}`);
    $('.score').html(`Score: ${STORE.correctAnswers}`);
}

function renderStartPage() {
    $('.js-render').html(`
    <h2>Start The Quiz</h2>
    <p>Elon Musk has been pretty popular among the public lately, and that's great. But here's the problem: he's also gaining a lot of inauthentic bandwagons. 
    This quiz was designed to weed out Elon Musk's #1 fans from the fake fans jumping in on the hype. 
    Do you think you can prove your worth? Give it a try!</p>
    <button class = "start-button js-start">Start</button>
    `);
    renderCounter();
}

function renderQuestionPage() {
    $('.js-render').html(`
    <form>
        <fieldset>
            <legend>${QUESTIONS[STORE.currentQuestion].question}</legend>
            ${generateAllOptionsHtml()}
        </fieldset>
        <button class="restart-button js-restart">Restart</button>
        <button class="submit-button js-submit">Submit</button>
    </form>`);
}

function renderFeedback(answer) {
    let feedback = isCorrect(answer) ? renderRight() : renderWrong();
    $('.js-render').html(feedback);
}

// Event listeners
function handleStart() {
    $('.js-render').on('click', '.js-start', function (event) {
        renderQuestionPage();
    });
}

function handleRestart() {
    $('.js-render').on('click', '.js-restart', function (event) {
        STORE.correctAnswers = 0, STORE.incorrectAnswers = 0, STORE.currentQuestion = 0;
        renderStartPage();
        renderCounter();
    });
}

function handleSubmit() {
    $('.js-render').on('click', '.js-submit', function (event) {
        event.preventDefault();

        let answer = $('input[name=answer]:checked', 'form').val();
        renderFeedback(answer);

        renderCounter();
    });
}

function handleNext() {
    $('.js-render').on('click', '.js-next', function (event) {
        if(STORE.currentQuestion < 5) {
            renderQuestionPage();
        }
        else {
            renderFinal();
        }
        renderCounter();
    });
}


function main() {
    renderStartPage(); 
    handleStart();
    handleRestart();
    handleSubmit();
    handleNext();
}

$(main);