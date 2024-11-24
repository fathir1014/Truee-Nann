const quizData = [
  {
      question: "Apa turunan pertama dari fungsi (2x^2 + 6x) . (3x^2 + 8x)",
      options: ["24x^3 + 54x^2 + 8x - 12 ", "24x^3 + 54x^2 + 8x + 12", "24x^2 + 54x^2 + 8x + 12", "24x^3 + 54x + 8x + 12"],
      correct: 1
  },
  {
      question: "Apa turunan pertama dari fungsi (4x^2 + 2) . (2x^3 + 2)",
      options: [" 48x^4 + 16x + 16x", "48x^4 + 16x^2 + 16", "48x^4 + 16x^2 + 16x", "48x^4 - 16x^2 + 16x"],
      correct: 2
  },
  {
      question: "Apa turunan pertama dari fungsi (4x + 2) . (2x^2 + 3)",
      options: ["24x^2 + 8x + 12", "24x^2 + 8x + 12x", "24x^2 + 8 + 12", "24x + 8x + 12"],
      correct: 0
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