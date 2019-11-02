// Components For Renders
function generateOptionHtml(answerIndex) {
    const allAnswers = QUESTIONS[STORE.currentQuestionIndex].answers; 
    return `
        <label for="${answerIndex}">
            <input type="radio" name="answer" id="${answerIndex}" value="${allAnswers[answerIndex]}" required/>
            <span>${allAnswers[answerIndex]}</span>
        </label>`;
}

function generateAllOptionsHtml() {
    const arrayOfOptions = QUESTIONS[STORE.currentQuestionIndex].answers;
    return arrayOfOptions.map((option, i) => generateOptionHtml(i)).join('');
}

function wrongFeedback() {
    const feedbackIndex = Math.floor(Math.random() * Math.floor(INSULTS.length));

    return `
    <header>
        <h2 class="feedback-title">${INSULTS[feedbackIndex].message}</h2>
    </header>
    <img class="feedback-image" src="${INSULTS[feedbackIndex].image}" alt="${INSULTS[feedbackIndex].alt}">
    <p class="wrong-feedback">The correct answer was: ${QUESTIONS[STORE.currentQuestionIndex].correctAnswer}</p>
    <button class = "next-button js-next">Next</button>`
}

function rightFeedback() {
    STORE.correctAnswers++;
    const feedbackIndex = Math.floor(Math.random() * Math.floor(INSULTS.length));

    return `
    <header>
        <h2 class="feedback-title">${COMPLEMENTS[feedbackIndex].message}</h2>
    </header>
    <img class="feedback-image wrong-image" src="${COMPLEMENTS[feedbackIndex].image}" alt="${COMPLEMENTS[feedbackIndex].alt}">
    <button class = "next-button js-next">Next</button>`
}

function isCorrect(givenAnswer) {
    const correctAnswer = QUESTIONS[STORE.currentQuestionIndex].correctAnswer;
    return givenAnswer === correctAnswer;
}

// Rendering Functions
function renderCounter() {
    $('.js-counter').html(`Question: ${STORE.currentQuestionIndex + 1}/${QUESTIONS.length}`);
    $('.score').html(`Score: ${STORE.correctAnswers}`);
}

function renderStartPage() {
    $('.js-render').html(`
    <header>
        <h2 class="feedback-title">Start The Quiz</h2>
    </header>
    <p>Elon Musk has been pretty popular among the public lately, and that's great. But here's the problem: he's also gaining a lot of inauthentic bandwagons. 
    This quiz was designed to weed out Elon Musk's #1 fans from the fake fans jumping in on the hype. 
    </p><p>Do you think you can prove your worth? Give it a try!</p>
    <button type="button" class = "start-button js-start">Start</button>
    `);
    $('.score').html('');
    $('.js-counter').html('');
}

function renderQuestionPage() {
    $('.js-render').html(`
    <form class="js-form" role="form">
        <fieldset>
            <legend>${QUESTIONS[STORE.currentQuestionIndex].question}</legend>
            ${generateAllOptionsHtml()}
        </fieldset>
        <button type="button" class="restart-button js-restart">Restart</button>
        <button type="submit" class="submit-button js-submit">Submit</button>
    </form>`);
}

function renderFeedbackPage(answer) {
    const feedback = isCorrect(answer) ? rightFeedback() : wrongFeedback();
    $('.js-render').html(feedback);
}

function renderFinalPage() {
    $('.js-render').html(`
    <header>
        <h2 class="feedback-title">You Finished The Quiz!</h2>
    </header>
    <p>So? Do you think you're still Elon's #1 fan? If this test made you feel insecure about your Elon Musk knowledge base, give the test another try!</p>
    <button type="button" class="restart-button js-restart">Restart</button>
    `);
}

// Event listeners
function handleStart() {
    $('.js-render').on('click', '.js-start', function (event) {
        renderQuestionPage();
        renderCounter();
    });
}

function handleRestart() {
    $('.js-render').on('click', '.js-restart', function (event) {
        STORE.correctAnswers = 0, STORE.incorrectAnswers = 0, STORE.currentQuestionIndex = 0;
        renderStartPage();
    });
}

function handleSubmit() {
    $('.js-render').on('submit', '.js-form', function (event) {
        event.preventDefault();

        const answer = $('input[name=answer]:checked', 'form').val();
        renderFeedbackPage(answer);
        renderCounter();
        STORE.currentQuestionIndex++;
    });
}

function handleNext() {
    $('.js-render').on('click', '.js-next', function (event) {
        if(STORE.currentQuestionIndex < QUESTIONS.length) {
            renderQuestionPage();
        }
        else {
            STORE.currentQuestionIndex -= 1;
            renderFinalPage();
        }
        renderCounter();
    });
}


function main() {
    // Render first page
    renderStartPage();

    //Listeners
    handleStart();
    handleRestart();
    handleSubmit();
    handleNext();
}

$(main);