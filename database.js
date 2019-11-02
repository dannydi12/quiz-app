const STORE = {
    correctAnswers: 0,
    currentQuestionIndex: 0
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
            "&#8220I hate Amazon.&#8221",
            "&#8220We both have space companies!&#8221",
            "&#8220Jeff who?&#8221",
            "&#8220I think his companies are overvalued.&#8221"
        ],
        correctAnswer: "“Jeff who?”"
    }
]

const INSULTS = [
    {
        message: "Do you even know who Elon is?", 
        image: "./images/confused-jeff.jpeg",
        alt: "Jeff Bezos looking confused"
    },
    {
        message: "You call yourself a fanboy?", 
        image: "./images/do-you-even-know.jpg",
        alt: "Elon Musk looking confused"
    },
    {
        message: "I think Elon would disapprove...", 
        image: "./images/disapprove.jpeg",
        alt: "Sad Elon Musk face"
    },
    {
        message: "Crash and burned...", 
        image: "./images/crash.jpeg",
        alt: "Falcon 9 rocket crashing"
    },
    {
        message: "What do you think life would be like if you actually knew the answer?", 
        image: "./images/what-do-you-think.jpeg",
        alt: "Elon Musk pensively looking at his 'cigar'"
    }
];

const COMPLEMENTS = [
    {
        message: "Dope! You got it right!", 
        image: "./images/dope.jpeg",
        alt: "Elon Musk smoking on the Joe Rogen show"
    },
    {
        message: "That was out of this world!", 
        image: "./images/starman.jpg",
        alt: "Starman in Tesla Roadster orbiting Earth"
    },
    {
        message: "You're on fire!", 
        image: "./images/on-fire.jpg",
        alt: "Elon Musk holding and firing the Boring Company's 'Not a Flamethrower'"
    },
    {
        message: "You did it!", 
        image: "./images/you-did-it.jpg",
        alt: "Elon Musk dancing after founding SpaceX"
    },
    {
        message: "Nice!", 
        image: "./images/nice.jpg",
        alt: "Elon Musk laughing at a dead deer on Pew Die Pie's meme review"
    }
];