const quizData = [
    {
        question: "Quelle est la capitale du Mali",
        choices: ["Yaoundé", "Abidjan", "Niamey", "Bamako"],
        answer: "Bamako"
    },
    {
        question: "Quelle est la capitale du Ghana",
        choices: ["Accra", "Asmara", "Lagos", "Abuja"],
        answer: "Accra"
    },
    {
        question: "Quelle est la capitale du Burkina Faso",
        choices: ["Addis Abeba", "Abidjan", "Ouagadougou", "Banjul"],
        answer: "Ouagadougou"
    },
    {
        question: "Quelle est la capitale de la Sierra Leone ",
        choices: ["Free-town", "Lilongwe", "Free-City", "Free-Country"],
        answer: "Free-town"
    },
    {
        question: "Quelle est la capitale du Maroc",
        choices: ["Le caire", "Tripoli", "Rabah", "Rabat"],
        answer: "Rabat"
    },
    {
        question: "Quelle est la capitale du Nigeria",
        choices: ["Lagos", "Abu Dhabi", "Abuja", "Yamoussoukro"],
        answer: "Abuja"
    },
    {
        question: "Quelle est la capitale de la Guinée équatoriale",
        choices: ["Bamako", "Lamabo", "Malabo", "Bamalo"],
        answer: "Malabo"
    },
    {
        question: "Quelle est la capitale du Rwanda",
        choices: ["Kigali", "Kagali", "Porto Novo", "Port louis"],
        answer: "Kigali"
    },
    {
        question: "Quelle est la capitale du Niger",
        choices: ["Libreville", "Abuja", "Niamey", "Sao Tomé"],
        answer: "Niamey"
    },
    {
        question: "Quelle est la toute première capitale du Cameroun",
        choices: ["Yaoundé", "Douala", "Buea", "Limbe"],
        answer: "Buea"
    },
    {
        question: "Quelle est la capitale du Libéria",
        choices: ["Liberio", "Monrovia", "Maseru", "Maputo"],
        answer: "Monrovia"
    }
];

const container = document.querySelector(".container");
const questionEl = document.querySelector("#question");
const choicesEl = document.querySelector("#choices");
const submitBtn = document.querySelector("#submit");
const scoreEl = document.querySelector("#score");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const question = quizData[currentQuestion];
    questionEl.textContent = question.question;
    choicesEl.innerHTML = "";
    question.choices.forEach(choice => {
        const choiceEl = document.createElement("div");
        choiceEl.classList.add("choice");
        choiceEl.textContent = choice;
        choiceEl.addEventListener("click", () => {
            if (choice === question.answer) {
                choiceEl.classList.add("selected");
                score++;
            } else {
                choiceEl.classList.add("wrong");
            }
            choicesEl.querySelectorAll(".choice").forEach(choice => {
                choice.removeEventListener("click", () => {});
            });
            submitBtn.disabled = false;
        });
        choicesEl.appendChild(choiceEl);
    });
}

function showScore() {
    container.innerHTML = "";
    scoreEl.textContent = `${score} sur ${quizData.length}!`;
    container.appendChild(scoreEl);
}

submitBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion();
        submitBtn.disabled = true;
    } else {
        showScore();
    }
});

showQuestion();
