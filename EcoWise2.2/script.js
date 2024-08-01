const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const explanationElement = document.getElementById("explanation");
const nextButton = document.getElementById("next-btn");
const info = document.getElementById("mainBtn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    explanationElement.style.display = "none";
    explanationElement.innerHTML = "";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    explanationElement.innerHTML = questions[currentQuestionIndex].explanation;
    explanationElement.style.display = "block";
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    explanationElement.innerHTML = `<div style="font-size: 20px;">Well done! You've taken a big step towards a sustainable future. Learn more about how to make difference. Click <a href="index.html" style="color: #004d40; text-decoration: none; font-weight: bold;">here</a> to go home.</div>`;
    explanationElement.style.display = "block";
    nextButton.innerHTML = '<a href="https://sdgs.un.org/goals" style="color: black; text-decoration: none;">Explore</a>';
    nextButton.style.display = "block";

}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        // startQuiz();
    }
});


startQuiz();
