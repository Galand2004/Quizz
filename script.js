const quizData = [
    {
        question: "Quelle est la superficie du continent Camerounais ?",
        choices: ["475 442 km2", "400 442 km2", "475 442 m2", "442 475 km2"],
        answer: "475 442 km2"
    },
    {
        question: "Combien d'annees Paul Biya a fait au pouvoir du continent",
        choices: ["42", "41", "21", "45"],
        answer: "41"
    },
    {
        question: "quel autre nom donne t'on au mont Cameroun",
        choices: ["char de dieu", "char de guerre", "mont continenal", "rio dos camaroes"],
        answer: "char de dieu"
    },
	{
		question: "Combien de president a deja eu le continent Camerounais depuis son independance",
        choices: ["5", "2", "1", "7"],
        answer: "2"
	},
	{
		question: "La prochaine election presidentielle au continent c'est en quelle annee ",
        choices: ["2025", "2024", "2027", "206"],
        answer: "2025"
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
    scoreEl.textContent = `petit genie humm   ${score} sur ${quizData.length}!`;
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
