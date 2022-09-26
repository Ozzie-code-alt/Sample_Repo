const restartBtn = document.getElementById("restart");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const trueBtn = document.getElementById("True");
const falseBtn = document.getElementById("False");
const userScore = document.getElementById("user-score");
const questionText = document.getElementById("question-text");
const currentQuestions = document.getElementById("current-Question");






let currentQuestion = 0;
var score = 0;
let questions = [
  {
    question: "1. What is the 3rd phase of design thinking?",
    answers: [
      { option: "Ideate", answer: true },
      { option: "Prototype", answer: false },
    ]
  },

  {
    question: "2. What tag does not require a closing tag?",
    answers: [
      { option: "  < HTML > ", answer: false },
      { option: " < br > ", answer: true }
    ]
  },
  {
    question: "3. CSS stands for Cascading Style Sheet.",
    answers: [
      { option: "True", answer: true },
      { option: "Not True", answer: false }
    ]
  },
  {
    question: "4. In JavaScript, it is a container in which you can store certain information",
    answers: [
      { option: "variable", answer: true },
      { option: "Class", answer: false }
    ]
  }, 
   {
    question: "5. What is the correct pair of <html> tags?",
    answers: [
      { option: "< html > < /html >", answer: true },
      { option: "< ! -- html >< html -- >", answer: false }
    ]
  },
  {
    question: "6. HTML stands for______",
    answers: [
      { option: "Hyper Text Markup Language", answer: true },
      { option: "Hyper Text Makeup Language", answer: false }
    ]
  }
  ,
  {
    question: "7. A _______ is a block of JavaScript code, that can be executed when called for ?",
    answers: [
      { option: "function", answer: true },
      { option: "Design Patterns", answer: false }
    ]
  }
  ,
  {
    question: "8. Which HTML tag is used to define an internal style sheet?",
    answers: [
      { option: "< style >", answer: true },
      { option: "Not maybe", answer: false }
    ]
  },
  {
    question: "9. Which CSS property is used to change the text color of an element?",
    answers: [
      { option: "color", answer: true },
      { option: "Font Style", answer: false }
    ]
  },
  {
    question: "10. In design thinking, this phase requires you to work with your team to identify one key problem to solve for the user.",
    answers: [
      { option: "Define", answer: true },
      { option: "Test", answer: false }
    ]
  },
  
  


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
      if (score < 10) {
        score++;
      }
    }
    userScore.innerHTML = score;
    currentQuestion.innerHTML=currentQuestion;



    if (currentQuestion < 9) {
      next();
    }

  };


  falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
  falseBtn.onclick = () => {
    let ano = 1;
    if (questions[currentQuestion].answers[ano].answer) {
      if (score < 10) {
        score++;
      }
    }
    userScore.innerHTML = score;
    currentQuestion.innerHTML=currentQuestion;
    if (currentQuestion < 9) {
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
  currentQuestion.innerHTML=currentQuestion;
  beginQuiz();
}








function next() {
  currentQuestion++;
  if (currentQuestion >= 9) {
    nextBtn.classList.add("hide");
    prevBtn.classList.remove("hide");
  }
 

  questionText.innerHTML = questions[currentQuestion].question;
  trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
  trueBtn.onclick = () => {
    let ano = 0;
    if (questions[currentQuestion].answers[ano].answer) {
      if (score < 10) {
        score++;
      }
    }
    userScore.innerHTML = score;
    currentQuestion.innerHTML=currentQuestion;
    if (currentQuestion < 9) {
      next();
    }
  };


  falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
  falseBtn.onclick = () => {
    let ano = 1;
    if (questions[currentQuestion].answers[ano].answer) {
      if (score < 10) {
        score++;
      }
    }
    userScore.innerHTML = score;
    currentQuestion.innerHTML=currentQuestion;
    if (currentQuestion < 9) {
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
      if (socre < 10) {
        score++;
      }
    }
    userScore.innerHTML = score;
    currentQuestion.innerHTML=currentQuestion;
    if (currentQuestion < 9) {
      next();
    }
  };
  falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
  falseBtn.onclick = () => {
    let ano = 1;
    if (questions[currentQuestion].answers[ano].answer) {
      if (score < 10) {
        score++;
        
      }
    }
    userScore.innerHTML = score;
    currentQuestion.innerHTML=currentQuestion;
    if (currentQuestion < 9) {
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

          
          const typedTextSpan = document.querySelector(".typed-text");
          const cursorSpan = document.querySelector(".cursor");
          
          const textArray = ["Group.", "JOSHUA.", "MATTHEW" ,"JUSTIN."];
          const typingDelay = 200;
          const erasingDelay = 100;
          const newTextDelay = 2000; // Delay between current and next text
          let textArrayIndex = 0;
          let charIndex = 0;
          
          function type() {
              if (charIndex < textArray[textArrayIndex].length) {
                  if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                  typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                  charIndex++;
                  setTimeout(type, typingDelay);
              }
              else {
                  cursorSpan.classList.remove("typing");
                  setTimeout(erase, newTextDelay);
              }
          }
          
          function erase() {
              if (charIndex > 0) {
                  if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                  typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                  charIndex--;
                  setTimeout(erase, erasingDelay);
              }
              else {
                  cursorSpan.classList.remove("typing");
                  textArrayIndex++;
                  if (textArrayIndex >= textArray.length) textArrayIndex = 0;
                  setTimeout(type, typingDelay + 1100);
              }
          }
          
          document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
              if (textArray.length) setTimeout(type, newTextDelay + 250);
          });

