const quizData = [
  {
      question: "Apa turunan pertama dari fungsi 2x + 4 / 3x^2 + 2",
      options: ["6x^2 - 24x + 4 / (3x^2 + 2)^2 ", "-6x^2 + 24x + 4 / (3x^2 + 2)^2", "-6x^2 - 24x + 4 / (3x^2 + 2)^2", "-6x^2 - 24x + 4 / (3x^2 + 2)"],
      correct: 2
  },
  {
      question: "Apa turunan pertama dari fungsi 2x^2 + 2 / 2x + 3",
      options: [" 4x^2 + 12x - 4 / (2x + 3)^2", "4x^2 + 12x - 4 / (2x + 3)", "4x + 12x - 4 / (2x + 3)^2", "4x^2 + 12x + 4 / (2x + 3)^2"],
      correct: 0
  },
  {
      question: "Apa turunan pertama dari fungsi 4x^2 + 4x / 2x^3 + 2",
      options: ["-8x^4 - 16x^3 + 8x + 8 / (2x^3 + 2)", "8x^4 - 16x^3 + 8x + 8 / (2x^3 + 2)^2", "-8x^4 - 16x^3 + 8x - 8 / (2x^3 + 2)^2", "-8x^4 - 16x^3 + 8x + 8 / (2x^3 + 2)^2"],
      correct: 3
  }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const landingPage = document.getElementById("landing-page");
const quizContainer = document.getElementById("quiz-container");
const startQuizButton = document.getElementById("start-quiz");
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("next");

// Perpindahan dari landing page ke kuis
startQuizButton.addEventListener("click", () => {
  landingPage.classList.add("d-none");
  quizContainer.classList.remove("d-none");
  loadQuestion();
});

function loadQuestion() {
  const currentData = quizData[currentQuestion];
  questionElement.textContent = currentData.question;

  optionsContainer.innerHTML = ""; // Reset opsi sebelumnya
  selectedAnswer = null;

  currentData.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.className = "btn btn-lg w-100 mb-2";
      button.textContent = option;

      button.onclick = () => selectAnswer(index, button);
      optionsContainer.appendChild(button);
  });
}

function selectAnswer(selectedIndex, button) {
  const buttons = document.querySelectorAll("#options .btn");
  buttons.forEach(btn => {
      btn.style.backgroundColor = ""; // Reset warna
  });

  button.style.backgroundColor = "#1e90ff";
  selectedAnswer = selectedIndex;
}

nextButton.addEventListener("click", () => {
  if (selectedAnswer === null) {
      alert("Pilih jawaban sebelum melanjutkan!");
  } else {
      const correctIndex = quizData[currentQuestion].correct;
      if (selectedAnswer === correctIndex) {
          score++;
      }

      currentQuestion++;
      if (currentQuestion < quizData.length) {
          loadQuestion();
      } else {
          displayResult();
      }
  }
});

function displayResult() {
  questionElement.textContent = `Kuis selesai! Skor Anda: ${score} dari ${quizData.length}`;
  optionsContainer.innerHTML = "";
  nextButton.style.display = "none";
}