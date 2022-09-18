const restartBtn = document.getElementById("restart");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const trueBtn = document.getElementById("True");
const falseBtn = document.getElementById("False");
const userScore = document.getElementById("user-score");
const questionText = document.getElementById("question-text");




let currentQuestion = 0;
var score = 0;
let questions = [
  {
    question: "Sample Question 1 answer is ME",
    answers: [
      { option: "me", answer: true },
      { option: "Not me", answer: false }
    ]
  },
  {
    question: "Sample Question 2 answer is YES",
    answers: [
      { option: "NO", answer: false },
      { option: "YES", answer: true }
    ]
  },
  {
    question: "Sample Question e answer is MAYBE",
    answers: [
      { option: "maybe", answer: true },
      { option: "Not maybe", answer: false }
    ]
  }
];


restartBtn.addEventListener("click", restart);
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);
submitBtn.addEventListener("click", submit);



function beginQuiz() {
  currentQuestion = 0;
  questionText.innerHTML = questions[currentQuestion].question;

  trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
  trueBtn.onclick = () => {
    let ano = 0;
    if (questions[currentQuestion].answers[ano].answer) {
      if (score < 3) {
        score++;
      }
    }
    userScore.innerHTML = score;




    if (currentQuestion < 2) {
      next();
    }

  };

  falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
  falseBtn.onclick = () => {
    let ano = 1;
    if (questions[currentQuestion].answers[ano].answer) {
      if (score < 3) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 2) {
      next();
    }
  };

  prevBtn.classList.add("hide");
}
beginQuiz();








function restart() {
  currentQuestion = 0;
  prevBtn.classList.remove("hide");
  nextBtn.classList.remove("hide");
  submitBtn.classList.remove("hide");
  trueBtn.classList.remove("hide");
  falseBtn.classList.remove("hide");
  score = 0;
  userScore.innerHTML = score;
  beginQuiz();
}








function next() {
  currentQuestion++;
  if (currentQuestion >= 2) {
    nextBtn.classList.add("hide");
    prevBtn.classList.remove("hide");
    
  }

  questionText.innerHTML = questions[currentQuestion].question;
  trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
  trueBtn.onclick = () => {
    let ano = 0;
    if (questions[currentQuestion].answers[ano].answer) {
      if (score < 3) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 2) {
      next();
    }
  };
  falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
  falseBtn.onclick = () => {
    let ano = 1;
    if (questions[currentQuestion].answers[ano].answer) {
      if (score < 3) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 2) {
      next();
    }
  };
  prevBtn.classList.remove("hide");
}

function prev() {
  currentQuestion--;
  if (currentQuestion <= 0) {
    prevBtn.classList.add("hide");
    nextBtn.classList.remove("hide");
  }

  questionText.innerHTML = questions[currentQuestion].question;
  trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
  trueBtn.onclick = () => {
    let ano = 0;
    if (questions[currentQuestion].answers[ano].answer) {
      if (socre < 3) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 2) {
      next();
    }
  };
  falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
  falseBtn.onclick = () => {
    let ano = 1;
    if (questions[currentQuestion].answers[ano].answer) {
      if (score < 3) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 2) {
      next();
    }
  };
  nextBtn.classList.remove("hide");
}

function submit() {
  prevBtn.classList.add("hide");
  nextBtn.classList.add("hide");
  submitBtn.classList.add("hide");
  trueBtn.classList.add("hide");
  falseBtn.classList.add("hide");
  questionText.innerHTML = "Good Job";
}

const pages = document.querySelectorAll(".set");



    const translateAmount = 100; 
    let translate = 0;
    slide = (direction) => {
      direction === "next" ? translate -= translateAmount : translate += translateAmount;
      pages.forEach(
              pages => (pages.style.transform = `translateX(${translate}%)`)
            );
          }